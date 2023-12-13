import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - District Operations Representative</title>
          <meta
            property="og:title"
            content="test-page - District Operations Representative"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_gfp1dn) => (
            <>
              <h1 id={context_gfp1dn?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextGfp1dnProp}
          persistDataDuringLoading={true}
          key={props?.contextGfp1dnProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextGfp1dnProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextGfp1dnProp: contextGfp1dnProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
