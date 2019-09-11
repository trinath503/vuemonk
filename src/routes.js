import Home from './components/Home.vue';
import ContactUs from './components/Contact.vue';
import UsersList  from './components/UserDetails.vue';
import Login from './components/Login.vue';
import Video from './components/video.vue';
export const routes = [

	{
		name: 'Home',
		path: '',
		component: Home
    },
    {
		name: 'Login',
		path: '/login',
		component: Login
	},
	{
		name: 'ContactUs',
		path: '/contactus',
		component: ContactUs
	},
	{
		name: 'UsersList',
		path: '/userslist',
		component: UsersList
	},
	{
		name: 'Video',
		path: '/video',
		component: Video
	}
]