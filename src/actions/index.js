import axios from 'axios';
import { callbackify } from 'util';
export const FETCH_POSTS = 'fetch_posts'
export const CREATE_POST = 'create_post'
export const DELETE_POST = 'delete_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=MYUNIQUEKEY'

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values){
    console.log(values)
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function deletePost(postNum){
        const request = axios.delete(`${ROOT_URL}/posts/${postNum}`)
        return {
            type: DELETE_POST,
            payload: request
        }
}