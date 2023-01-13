import React from 'react';
import ChatsList from "./ChatsList/ChatsList";
import Chat from "./Chat/Chat";

const Messenger = () => {
	return (
		<div className="messenger">
			<ChatsList />
			<Chat />
		</div>
	);
};

export default Messenger;