import { Box, Divider, Paper } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TaskCompleted from './TaskCompleted';

const tasks = [
	{
		index: 0,
		title: 'Fixing Reactive scaler',
		completed: false,
	},
	{
		index: 1,
		title: 'Review Admin Service PRs',
		completed: false,
	},
	{
		index: 2,
		title: 'Deploy Policy Agent',
		completed: false,
	},
	{
		index: 3,
		title: 'Write documentation for Quotas service',
		completed: false,
	},
];

export default function TaskList() {
	return (
		<Paper square sx={{ p: '15px' }}>
			<Divider textAlign='right'>Completed 1/5</Divider>
			<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
				<TaskCompleted
					completed={true}
					index={'0'}
					title='Design doc on API Gateway'
				></TaskCompleted>
				{tasks.map((task) => (
					<ListItem key={task.index}>
						<ListItemIcon>
							<Checkbox edge='start' checked={task.completed} />
						</ListItemIcon>
						<ListItemText primary={task.title} />
					</ListItem>
				))}
			</List>
		</Paper>
	);
}

// const useStyles = makeStyles(() => ({
//     task: {
//         alignItems: 'center',
//         height: '46px',
//         width: '100%',
//     },
//     tasksRoot: {
//         display: 'flex',
//         alignItems: 'center',
//         flexDirection: 'column',
//         width: '100%',
//     },
//     // input: {
//     //     marginLeft: theme.spacing(1),
//     //     flex: 1,
//     // },
// }));
