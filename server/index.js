const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')

app.use(session({
	secret: 'shadiuhsaoudhou1h2u3houh238h',
	saveUnitialized: false,
	resave: false
}))

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/angdb')
.then(() => console.log('Mongoose working!'))

const User = require('./models/users')
app.use(bodyParser.json())


/////////LogIn API/////////////////////////////////////////////
app.post('/api/login', async (req, res) => {
	const {userName, password} = req.body

	console.log(userName, password);
	const resp = await User.findOne({userName, password})
	if(!resp){
		res.json({
			success: false,
			message: "Incorrect Details"
		})
	}
	else{
		res.json({
			success: true,
			message: "Logged In!"
		})
		req.session.user = userName
		req.session.save()

		// make a session and set user to logged in
	}
})

////GET DATA///////////////////////////////////////
app.get('/api/data', async(req, res) =>{

	//console.log(req.session)
	const info = await User.findOne({userName: req.session.user})
	//console.log(info)
	if(!info){
		res.json({
			status: false,
			message: 'user not found'
		})
		return
	}

	res.json({
		status: true,
		userName: req.session.user,
		email: info.email,
		password: info.password
	})
})

//////Update userName/////////////////////////////

app.post('/api/username', async (req, res) =>{
	console.log(req.session.user, req.body.value)
	const user = await User.findOne({userName: req.session.user})
	if(!user){
		res.json({
			success: false,
			message: 'Invalid user!'
		})
		return
	}
	await User.update({userName: req.session.user}, { $set: { userName: req.body.value }})
	res.json({
		success: true
	})
})

////Delete User///////////////////////////////////

app.get('/api/delete', async (req, res) =>{
	console.log(req.session.user, req.body.value)
	const user = await User.findOne({userName: req.session.user})
	if(!user){
		res.json({
			success: false,
			message: 'Invalid user!'
		})
		return
	}
	await User.delete({userName: req.session.user})
	res.json({
		success: true
	})
})

//////Update password/////////////////////////////

app.post('/api/password', async (req, res) =>{
	console.log(req.session.user, req.body.value)
	const user = await User.findOne({userName: req.session.user})
	if(!user){
		res.json({
			success: false,
			message: 'Invalid user!'
		})
		return
	}
	await User.update({userName: req.session.user}, { $set: { password: req.body.value }})
	res.json({
		success: true
	})
})

//////Update email/////////////////////////////

app.post('/api/email', async (req, res) =>{
	console.log(req.session.user, req.body.value)
	const user = await User.findOne({userName: req.session.user})
	if(!user){
		res.json({
			success: false,
			message: 'Invalid user!'
		})
		return
	}
	await User.update({userName: req.session.user}, { $set: { email: req.body.value }})
	res.json({
		success: true
	})
})

////Logged in/////////////////////////////////////
app.get('/api/isloggedin', (req, res) =>{
	res.json({
		status: !!req.session.user
	})
} )

//////Log Out////////////////////////////////////
app.get('/api/logout', (req, res) => {
	req.session.user = undefined
	req.session.save()
	res.json({
		success: true
	})
})

/////////Register API//////////////////////////////////
app.post('/api/register', async (req, res) => {   
	const {userName, email, password} = req.body
	const existingUser = User.findOne({email})

	if (!existingUser){
		res.json({
			success: false,
			message: "Already have an account"
		})
		return
	}
	
	const user = new User({
		userName,
		email,
		password
	})
	
	const result = await user.save()
	console.log(result)

	res.json({
		success: true,
		message: "Registered!"
	})
	//res.send('register working!!')
})



app.listen(1234, () => console.log('Server Listening at localhost:1234'))