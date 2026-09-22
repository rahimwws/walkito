-- The bucket the demonstration clips live in.
--
-- Public-read on purpose. A clip of a calf stretch is not a secret, and signing
-- every request would add a round trip in front of the first frame of a video
-- somebody is already waiting on — mid-session, with the phone propped against
-- a wall. Nothing in the object names identifies a user; they are exercise
-- filenames.
--
-- Write stays closed to clients. The clips are uploaded by
-- `scripts/upload-clips.mjs` with the service key, from a machine, and a bucket
-- an anonymous client can write to is a bucket anybody can fill.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'exercise-clips',
  'exercise-clips',
  true,
  -- Twice the largest clip. Room for a re-record at higher quality without
  -- being a general-purpose upload target.
  4194304,
  array['video/mp4']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Read for everyone, including the anonymous identity the app signs in as.
--
-- Worth being honest about what this does and does not do: the bucket is
-- `public = true`, and the public object endpoint the app uses does not consult
-- row level security at all. So this policy is not what serves the clips. It
-- covers the authenticated storage path, and it is what would still hold if the
-- bucket were ever flipped to private — which is the only reason to keep it.
drop policy if exists "clips are public" on storage.objects;
create policy "clips are public" on storage.objects
  for select using (bucket_id = 'exercise-clips');

-- No insert, update or delete policy is declared, which means none is granted:
-- `storage.objects` has row level security on, so the absence of a policy is
-- the denial. The service key bypasses RLS, which is how the upload script
-- writes and why it is the only thing that can.
