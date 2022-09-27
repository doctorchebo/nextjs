import React from 'react'

function News({data}) {
  return (
    <div className='content'>{data}</div>
  )
}

export default News

export const getStaticProps = async context => {
    console.log(context.previewData)
    return {
        props: {
            data: context.preview ? 'News draft data' : 'News publish data'
        }
    }
}