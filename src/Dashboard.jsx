import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	root: {
		margin: '50px',
		padding: theme.spacing(3, 2),
	},
	flex: {
    display: 'flex',
    alignItems: 'center',
	},
	topicsWindow: {
		width: '30%',
		height: '300px',
		borderRight: '1px solid grey',
	},
	chatWindow: {
		width: '70%',
    height: '300px',
    padding: '20px',
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
  
  const [textValue, changeTextValue] = React.useState('');

	return (
		<div>
			<Paper className={classes.root}>

				<Typography variant="h4" component="h4">
					Chat App
				</Typography>
				<Typography variant="h5" component="h5">
					Topic placeholder
				</Typography>

        {/** Topics & Chat window Container START */}
				<div className={classes.flex}>

          {/** TopicsWindow Component */}
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

          {/** ChatWindow Component */}
					<div className={classes.chatWindow}>
          {[{from: 'user', msg: 'Hello World'}].map((chat, i) => {
                return (
                  <div className={classes.flex} key={i}>
                    <Chip label={chat.from} className={classes.chip}/>
                    <Typography variant='p' component='p'>{chat.msg}</Typography>
                  </div>
                );
              })}
          </div>

				</div>
        {/** Topics & Chat window Container END */}

        {/** InputMessage Component */}
				<div className={classes.flex}>
            <TextField 
              label='My Message...'
              className={classes.chatBox} 
              value={textValue}
              onChange={e => changeTextValue(e.target.value)}
            />              
            <Button variant='contained' color='primary' className={classes.button}>
              Send
            </Button>
        </div>

			</Paper>
		</div>
	);
}

export default Dashboard;
