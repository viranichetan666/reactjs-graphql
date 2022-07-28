import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import DashboardRoutes from 'routes/Dashboard'
import { Table } from 'antd';
import type { ColumnsType, TablePaginationConfig, TableProps } from 'antd/lib/table';
import { useQuery } from "@apollo/client";
import { getPostsQuery } from "apollo/query/posts";
import { setPostsData } from "redux/reducers/posts";
import { useSelector } from "react-redux";
import { getPostsData } from "redux/selectors/posts";

const MainLayoutWrapper = styled.div`
   .post-img {
     width: 40px;
     height: 40px;
   }
`;

interface MainLayoutProps {

}

interface DataType {
  title: String;
  image: String;
  description: String;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
    width: '20%',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    width: '20%',
    render: (t, r) => <img className="post-img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png' />
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: '20%',
  },
];

const MainLayout: FunctionComponent<MainLayoutProps> = () => {

  const [tabListCount, setTabelListCout] = useState<number>(10);
  const { data, loading, error, fetchMore } = useQuery(getPostsQuery, {
    variables: { page: 1, limit: tabListCount }
  });
  const dispatch = useDispatch();
  const postsData = useSelector(getPostsData)

  useEffect(() => {
    if (data) {
      dispatch(setPostsData(data.posts))
    }
  }, [data])

  if (loading) return <div>loading...</div>

  return (
    <MainLayoutWrapper>
      <h1>Dashboard</h1>
      <Table
        columns={columns}
        dataSource={postsData.posts}
        pagination={{
          pageSize: tabListCount,
          total: postsData.total || 0,
          pageSizeOptions: ["10", "20"],
          showSizeChanger: true,
          onChange: (page, limit) => {
            fetchMore ( {
              variables: {
                page: page,
                limit: limit
              },
            })
            setTabelListCout(limit);
          },
        }}
        loading={loading}
      />

      <DashboardRoutes />
    </MainLayoutWrapper>
  )
};

MainLayout.propTypes = {

};

MainLayout.defaultProps = {

};

export default MainLayout;
