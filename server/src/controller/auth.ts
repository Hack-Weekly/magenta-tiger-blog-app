/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { Request, Response } from 'express';

const response = {
  token: '',
  success: false,
  message: '',
  data: {},
};

export class Auth {
  async login(req: Request, res: Response) {
    return res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=repo`,
    );
  }

  async loginOAuth(req: Request, res: Response) {
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
      res.cookie('githubToken', response.token);
      res.redirect('https://magenta-tiger-blog-app.vercel.app/');
    } catch (error) {
      res.send(error);
    }
  }

  logout(req, res) {
    res.cookie('githubToken', '', {
      expires: new Date(0),
    });
    res.redirect('/');
  }
}
