import { Box, Checkbox, InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DragIndicatorTwoToneIcon from '@mui/icons-material/DragIndicatorTwoTone';
import React from 'react';

export interface TaskProps {
	title: string;
	index: string;
	completed: boolean;
}

export default function Task(props: TaskProps) {
	return (
		<Box display='flex' flexDirection='row' style={{ width: '100%' }}>
			<IconButton size='small'>
				<DragIndicatorTwoToneIcon color='disabled' />
			</IconButton>
			<Checkbox checked={false} />
			<InputBase
				readOnly={true}
				value={props.title}
				inputProps={{ style: { fontSize: 14 } }}
			/>
		</Box>
	);
}
