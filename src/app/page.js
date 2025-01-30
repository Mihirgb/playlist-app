
import { Box, Typography,Button } from '@mui/material';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-8 p-8">
      <Box sx={{ p: 4 }}>
            <Typography variant="h3">Welcome to Mihir's Playlists App</Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>Choose a playlist:</Typography>

            <Box sx={{ mt: 3 }}>
                <Link href="/happysongs" passHref>
                    <Button variant="contained" sx={{ mr: 2 }}>Happy Playlist</Button>
                </Link>

                <Link href="/workout-jams" passHref>
                    <Button variant="contained" sx={{ mr: 2 }}>Workout Jams</Button>
                </Link>

                <Link href="/party-mix" passHref>
                    <Button variant="contained">Party Mix</Button>
                </Link>
            </Box>
        </Box>
    </div>
  );
}
