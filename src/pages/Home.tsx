import React, {FC, useEffect, useState} from 'react';
import { Article, Layout } from '../components';
import { IArticle } from '../models';
import './Home.css';

const Home: FC = () => {
    const API_BASEURL = 'http://localhost:3000'
    const [articles, setArticles] = useState<IArticle[]>([])

  useEffect(
      () => {
          fetch(`${API_BASEURL}/articles`)
              .then(
                  response => {
                      if (!response.ok) {
                          throw new Error('Error while fetching articles.')
                      }
                      return response.json()
                  }
              )
              .then((json: IArticle[]) => {
                  setArticles(json)
              })
      },
      []
  )

  return (
    <Layout title="Articles">

      <Article.List articles={articles} />

    </Layout>
  );
};

export default Home;
