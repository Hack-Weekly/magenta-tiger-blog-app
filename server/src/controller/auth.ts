/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { Request, Response } from 'express';

export class Auth {
  async login(req: Request, res: Response) {
    return res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user`,
    );
  }

  async loginOAuth(req: Request, res: Response) {
    const response = {
      token: '',
      success: false,
      message: '',
      data: {},
    };

    try {
      const body = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: req.query.code,
      };
      await axios
        .post('https://github.com/login/oauth/access_token', body, {
          headers: { accept: 'application/json' },
        })
        .then((r) => {
          if (r.data && r.data.access_token) {
            response.token = r.data.access_token;
            response.success = true;
          } else {
            response.success = false;
            response.message = 'Error in authorization';
            response.token = '';
          }
        });

      res.cookie('githubToken', response.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });

      res.redirect('http://localhost:3000/');
    } catch (error) {
      res.send(error);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      if (req.cookies.githubToken) {
        const userResponse = await axios.get('https://api.github.com/user', {
          headers: {
            Authorization: `Bearer ${req.cookies.githubToken}`,
          },
        });

        const userId = userResponse.data.id;

        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.set('Access-Control-Allow-Credentials', 'true');

        res.json({ userId });
      } else {
        console.log('No cookie found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  logout(req, res) {
    res.cookie('githubToken', '', {
      expires: new Date(0),
    });
    res.redirect('/');
  }
}
