import { Box, Divider, Paper } from '@mui/material';
import React from 'react';
import Meetings from './meeting/Meetings';
import TaskList from './task/TaskList';
import Player from './player/Player';
import Timer from './timer/Timer';

export default function Dashboard() {
	return (
		<Box
			display='flex'
			flexDirection='row'
			bgcolor='#36393f'
			justifyContent='space-around'
			columnGap='10px'
			sx={{ width: '100%', height: '100vh', m: '10px', p: '10px' }}
		>
			<Box sx={{ width: '27.5%' }}>
				<Divider />
				<TaskList />
				<Divider />
			</Box>

			<Box
				sx={{ width: '45%' }}
				display='flex'
				flexDirection='column'
				gap='10px'
				justifyContent='space-between'
			>
				<Player
					title='FEEL NOTHING'
					artist='The Plot In You'
					cover='https://i1.sndcdn.com/artworks-OFx5Rh9DUFvA-0-t500x500.jpg'
				/>
				<Timer />
				<Meetings />
			</Box>

			<Box sx={{ width: '27.5%' }}>
				<Divider />
				<TaskList />
				<Divider />
			</Box>
		</Box>
	);
}
//
// main: '#36393f',
// 	light: '#e2e2e2',
// 	dark: '#333333',
