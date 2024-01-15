import { NextApiHandler } from 'next';
import axios from 'axios';

const GoogleCallback: NextApiHandler = async (req, res) => {
  try {
    const { code } = req.query;

    const backendResponse = await axios.post('/user/login', { code });
    const jwetToken = backendResponse.data.token;

    res.setHeader('Set-Cookie', ``);
    res.redirect('/schoolcertification');
  } catch (error) {
    console.log('Error during Google login Callback: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default GoogleCallback;
