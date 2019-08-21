import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
	root: {
		margin: '50px',
		padding: theme.spacing(3, 2),
	},
	flex: {
		display: 'flex',
	},
	topicsWindow: {
		width: '30%',
		height: '300px',
		borderRight: '1px solid grey',
	},
	chatWindow: {
		width: '70%',
		height: '300px',
	},
	chatBox: {
		width: '85%',
	},
	button: {
		width: '15%',
	},
}));

function Dashboard() {
	const classes = useStyles();

	return (
		<div>
			<Paper className={classes.root}>
				<Typography variant="h4" component="h4">
					Chat App
				</Typography>
				<Typography variant="h5" component="h5">
					Topic placeholder
				</Typography>

				<div className={classes.flex}>
					<div className={classes.topicsWindow}>
            <List>
              {['JavaScript', 'ReactJS', 'Node/Express'].map( (topic, i) => {
                return (
                  <ListItem key={i} button>
                    <ListItemText primary={topic} />
                  </ListItem>
                );
              })}
            </List>
					</div>

					<div className={classes.chatWindow}>

          </div>
				</div>

				<div className={classes.flex}>

        </div>
			</Paper>
		</div>
	);
}

export default Dashboard;
