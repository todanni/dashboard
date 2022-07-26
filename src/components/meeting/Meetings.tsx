import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';

interface Meeting {
	startTime: string;
	endTime: string;
	company: string;
	title: string;
}

export default function Meetings() {
	//

	return (
		<Card sx={{ minWidth: 275, p: '15px' }}>
			<Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
						Next meeting
					</Typography>
					<Typography variant='h5' component='div'>
						Daily standup
					</Typography>
					<Typography sx={{ mb: 1.5 }} color='text.secondary'>
						10:30 AM
					</Typography>
					<Typography variant='body2'>Duration: 30 mins</Typography>
				</CardContent>
				<CardMedia
					component='img'
					sx={{ width: 151 }}
					image='https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png'
					alt='unity-technologies-logo.png'
				/>
			</Box>
		</Card>
	);
}
