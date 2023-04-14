/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { Request, Response } from 'express';
import { LocalStorage } from 'node-localstorage';

const response = {
  token: '',
  success: false,
  message: '',
  data: {},
};

export class Auth {
  async login(req: Request, res: Response) {
    return res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user`
    );
  }

  async loginOAuth(req: Request, res: Response) {
    const { postId } = req.params;

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

      const localStorage = new LocalStorage('./token');
      localStorage.setItem('githubToken', response.token);

      // res.cookie('githubToken', response.token, {
      //   sameSite: 'none',
      //   secure: true,
      //   domain: 'http://localhost:3000',
      //   path: '/',
      // });
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
