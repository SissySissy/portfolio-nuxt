import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql
} from '@apollo/client/core'
import fetch from 'cross-fetch'

const serverUrl = 'http://silviamonti-wordpress.morme.ch/graphql'

const client = new ApolloClient({
  link: createHttpLink({
    uri: serverUrl,
    fetch
  }),
  cache: new InMemoryCache()
})

const ALL_PROJECTS = gql`
  query MyQuery {
    projects {
      nodes {
        id
        projectId
        title
        acf {
          featureImage {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }`

const NEXT_PROJECT = gql`
  query MyQuery($cursor: String!) {
    projects(first: 1, after: $cursor) {
      edges {
        node {
          id
          projectId
          title
          acf {
            link
            subtitle
            year
            featureImage {
              sourceUrl
            }
          }
          content
        }
      }
    }
  }`

const FIRST_PROJECT = gql`
query MyQuery {
  projects(first: 1) {
    edges {
      node {
        id
        projectId
        title
        acf {
          link
          subtitle
          year
          featureImage {
            sourceUrl
          }
        }
      }
    }
  }
}`

const MAIN_PAGE = gql`
  query MyQuery {
    page(id: "2", idType: DATABASE_ID) {
      content
      acfAbout {
        heroContent {
          text
          title
          fieldGroupName
        }
      }
    }
  }`

const SINGLE_PROJECT = gql`
  query Project($id: Int!) {
    projects(where: {id: $id}) {
      edges {
        cursor
        node {
          id
          title
          content(format: RENDERED)
          acf {
            backgroundColor
            category
            subtitle
            client
            year
            link
            techList {
              techItem
            }

            featureImage {
              sourceUrl
              mediaItemUrl
              mimeType
            }
            flexibleContent {
              ... on Project_Acf_FlexibleContent_FullImage {
                fieldGroupName
                image {
                  id
                  sourceUrl
                  mediaItemUrl
                  mimeType
                }
              }
              ... on Project_Acf_FlexibleContent_CenteredImage {
                color
                fieldGroupName
                image {
                  id
                  sourceUrl
                  mediaItemUrl
                  mimeType
                }
              }
              ... on Project_Acf_FlexibleContent_DoubleImage {
                fieldGroupName
                imageLeft {
                  sourceUrl
                }
                imageRight {
                  sourceUrl
                }
              }
              ... on Project_Acf_FlexibleContent_TextBlock {
                fieldGroupName
                columns {
                  textSection
                  titleSection
                  fieldGroupName
                }
              }
            }
          }
        }
      }
    }
  }`

export { client, ALL_PROJECTS, MAIN_PAGE, SINGLE_PROJECT, NEXT_PROJECT, FIRST_PROJECT }
