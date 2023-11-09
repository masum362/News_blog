import express from 'express';
import { Homepage,addPost,getPosts,getSinglePost,register,Login,getUser,SignOut,AuthFailed,getAllUser,getSpecificUsers,getCategories,deleteBlog,editPost,deleteUser,getSingleUser,editUser,addComment,getComments,approveComment,getPostComments,deleteComment,updateUser} from '../controllers/pages-controllers.js';
import passport from 'passport';
import { checkAuth } from './passport.js';
const CLIENT_URL  = 'http://localhost:5173/'

const router = express.Router();


router.get('/', Homepage)
router.get('/getuser',checkAuth, getUser)
router.get('/signout', SignOut)
router.get('/getposts',getPosts )
router.get('/getallusers',checkAuth , getAllUser )
router.get('/getalluser/:type',getSpecificUsers )
router.get('/getcategories',getCategories )
router.get('/login/failed',AuthFailed )
router.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }))
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: `/login/failed` ,successRedirect: `${CLIENT_URL}` }));
router.get('/post/:id',getSinglePost )            
router.get('/user/:id',getSingleUser )            
router.get('/getcomments/:id',checkAuth,getPostComments )            
router.get('/comments/:type',getComments ) 
router.get('/approve/comment/:id',checkAuth,approveComment )            
// router.post('/addpost',addPost)
router.post('/register',register)
router.post('/update-user',checkAuth,updateUser)
router.post('/createblog',checkAuth,addPost)
router.post('/:id/comment/add',checkAuth,addComment)
router.post('/updateblog/:id',checkAuth,editPost)
router.post('/updateuser/:id',checkAuth,editUser)
router.post('/login',passport.authenticate('local',{ failureRedirect: `/login/failed`}),Login)
router.delete('/deleteblog/:id',checkAuth,deleteBlog)
router.delete('/deleteuser/:id',checkAuth,deleteUser)
router.delete('/delete/comment/:id',checkAuth,deleteComment)


export default router;