import { PeerServer } from 'peer';

const peerServer = PeerServer({
    port: 443,
    path: '/',
    allow_discovery: true,
});
