import React, {FC, useEffect, useState} from "react";
import { Category, Layout } from "../components";
import {ICategory} from "../models";

const AllCategories: FC = () => {
    const API_BASEURL = 'http://localhost:3000'
    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(
        () => {
            fetch(`${API_BASEURL}/categories`)
                .then(
                    response => {
                        if (!response.ok) {
                            throw new Error('Error while fetching articles.')
                        }
                        return response.json()
                    }
                )
                .then((json: ICategory[]) => {
                    setCategories(json)
                })
        },
        []
    )

  return (
    <Layout title="Categories">

      <Category.List categories={categories} />

    </Layout>
  )
}

export default AllCategories;
