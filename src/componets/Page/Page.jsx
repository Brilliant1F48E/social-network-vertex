import React from 'react';
import {Route, Routes} from "react-router-dom";
import News from "../News/News";
import Chats from "../Chats/Chats";
import Profile from "../Profile/Profile";

const Page = () => {
	return (
		<main className="page">
			<Routes>
				<Route path="/" element={<News />}/>
				<Route path="news" element={<News />}/>
				<Route path="chats" element={<Chats />}/>
				<Route path="profile" element={<Profile />}/>
			</Routes>
		</main>
	);
};

export default Page;