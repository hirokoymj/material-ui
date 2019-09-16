import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
		flexGrow: 1,
	},
	lightColor: {
		backgroundColor: theme.palette.primary.light
	},
	// mainCallButton: {
	// 	marginRight: "20px"
	// },
	subTitle:{
		marginBottom: theme.spacing(3)
	},
	mainTitle:{
		marginBottom: theme.spacing(3)
	},
	mainContainer:{
		marginTop: "34px"
	},
  heroContent: {
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: 'pink',
    padding: theme.spacing(8, 0, 6),
	},
  heroButton: {
    backgroundColor: 'green',
    padding: theme.spacing(8, 0, 6),
	},
	footer: {
    padding: theme.spacing(6, 0),
    backgroundColor: 'orange',
	},
	myAppBar: {
		boxShadow: "none"
	},
	bioSection: {
    //padding: theme.spacing(4, 0),
	},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(4,0),
  }
}));


const AppTest = () => {
	const [name, setName] = React.useState('placeholder');
	const classes = useStyles();

  return (
		<Fragment>
			<CssBaseline />
				<AppBar position="sticky" color="primary">
					<Toolbar >
						<IconButton edge="start" color="secondary" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Album layout
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>				
			<main>
				{/* Form Test */}
				<Container maxWidth="md">
					<FormControl fullWidth className={classes.formControl}>
						<InputLabel htmlFor="component-simple">Name</InputLabel>
						<Input id="component-simple" value={name} onChange={null} />
					</FormControl>				
				</Container>				
				{/* Sign In */}
				{/* bio */}
				<Container maxWidth="lg" className={classes.bioSection}>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h5" component="h3" gutterBottom>
								Sub title
							</Typography>
							<Typography component="p" gutterBottom>
								I am a full-stack web developer in Los Angeles and have an experience over ten years. My strong skill is JavaScript especially React and Redux. This website is to post my technical tips and notes through my daily coding life.						
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="h5" component="h3" gutterBottom>
								Sub title
							</Typography>
							<Typography component="p" gutterBottom>
								I am a full-stack web developer in Los Angeles and have an experience over ten years. My strong skill is JavaScript especially React and Redux. This website is to post my technical tips and notes through my daily coding life.						
							</Typography>						
						</Grid>
					</Grid>
				</Container>

				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm" className={classes.mainContainer}>
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							Album layout
						</Typography>
						<Typography component="h5" align="center" color="textSecondary" paragraph>
							Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
						</Typography>	
						<Grid container justify="center" spacing={2} /*direction="row"*/>
							<Grid item style={{border:"2px solid red"}}>
								<Button variant="contained" color="primary" /*className={classes.mainCallButton}*/>
									Main call to action
								</Button>				
							</Grid>
							<Grid item style={{border:"2px solid red"}}>
								<Button variant="outlined" color="primary">
									Secondary Action
								</Button>							
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className={classes.heroButton}>
					<Container maxWidth="md">
						<Grid container spacing={4}>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Paper>
									<Typography variant="h5" component="h3">
										This is a sheet of paper.
									</Typography>
								</Paper>						
							</Grid>
						</Grid>
					</Container>
				</div>



				<div style={{backgroundColor: "aqua"}}>
					test test test
				</div>

				<Grid container justify="center" spacing={2} style={{backgroundColor: "blue"}}>
					test test test
				</Grid>


				</main>
			<footer className={classes.footer}>
				<Typography variant="h6" /*component="h6"*/ align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="body1" component="p" align="center" color="textSecondary" gutterBottom>
				Something here to give the footer a purpose!
				</Typography>				
				<Typography variant="caption" component="p" align="center" color="textPrimary" gutterBottom>
					Copyright © Your Website 2019.
				</Typography>				
			</footer>
		</Fragment>
  );
}

export default AppTest;



// <Typography variant="h1" gutterBottom>
// h1. Heading
// </Typography>
// <Typography variant="h2" gutterBottom>
// h2. Heading
// </Typography>
// <Typography variant="h3" gutterBottom>
// h3. Heading
// </Typography>
// <Typography variant="h4" gutterBottom>
// h4. Heading
// </Typography>
// <Typography variant="h5" gutterBottom>
// h5. Heading
// </Typography>
// <Typography variant="h6" gutterBottom>
// h6. Heading
// </Typography>
// <Typography variant="subtitle1" gutterBottom>
// subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
// </Typography>
// <Typography variant="subtitle2" gutterBottom>
// subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
// </Typography>
// <Typography variant="body1" gutterBottom>
// body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
// unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
// dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
// </Typography>
// <Typography variant="body2" gutterBottom>
// body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
// unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
// dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
// </Typography>
// <Typography variant="button" display="block" gutterBottom>
// button text
// </Typography>
// <Typography variant="caption" display="block" gutterBottom>
// caption text
// </Typography>
// <Typography variant="overline" display="block" gutterBottom>
// overline text
// </Typography>			




// <div className={classes.root}>
// <AppBar position="sticky" color="primary">
// 	<Toolbar>
// 		<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
// 			<MenuIcon />
// 		</IconButton>
// 		<Typography variant="h6" className={classes.title}>
// 			Album layout
// 		</Typography>
// 		<Button color="inherit">Login</Button>
// 	</Toolbar>
// </AppBar>
// <Container maxWidth="sm" className={classes.mainContainer}>
// 	<Typography component="h1" align="center" variant="h2" className={classes.mainTitle}>
// 		Album layout
// 	</Typography>
// 	<Typography component="p" align="center" className={classes.subTitle}>
// 		Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
// 	</Typography>	
// 	<Grid container justify="center" spacing={2} direction="row">
// 		<Button variant="contained" color="primary" className={classes.mainCallButton}>
// 			Main call to action
// 		</Button>				
// 		<Button variant="outlined" color="primary">
// 			Secondary Action
// 		</Button>							
// 	</Grid>
// </Container>
// <Container style={{backgroundColor: "gray"}}>
// test test test
// </Container>
// </div>