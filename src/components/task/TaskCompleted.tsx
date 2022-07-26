import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import { TaskProps } from './Task';

export default function TaskCompleted(props: TaskProps) {
	return (
		<ListItem key={props.index} style={{ textDecoration: 'line-through' }}>
			<ListItemIcon>
				<Checkbox color='secondary' edge='start' checked={props.completed} />
			</ListItemIcon>
			<ListItemText primary={props.title} />
		</ListItem>
	);
}
