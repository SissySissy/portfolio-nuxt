import { gql } from 'nuxt-graphql-request'

const ALL_PROJECTS = gql`
  query MyQuery {
    projects {
      nodes {
        id
        projectId
        title
        acf {
          subtitle
          interactiveColor
          category
          featureImage {
            mediaItemUrl
            mimeType
            srcSet
            sourceUrl
            altText
            mediaDetails {
              width
              height
              sizes {
                name
                sourceUrl
                width
              }
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
            subtitle
            featureImage {
              mediaItemUrl
              mimeType
              srcSet
              sourceUrl
              altText
              mediaDetails {
                width
                height
                sizes {
                  name
                  sourceUrl
                  width
                }
              }
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
          subtitle
          featureImage {
            mediaItemUrl
            mimeType
            srcSet
            sourceUrl
            altText
            mediaDetails {
              width
              height
              sizes {
                name
                sourceUrl
                width
              }
            }
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
      interests {
        label
        background {
          mediaItemUrl
          mimeType
          srcSet
          sourceUrl
          altText
          mediaDetails {
            width
            height
            sizes {
              name
              sourceUrl
              width
            }
          }
        }
      }
      techStack {
        label
      }
      titleMenu
      infoExtended {
        contact
        text
      }
    }
  }
}`

const IMAGES_ARRAY = gql`
query MyQuery {
  page(id: "2", idType: DATABASE_ID) {
    acfAbout {
      heroFiles {
        image {
          mediaItemUrl
          mimeType
          srcSet
          sourceUrl
          altText
          mediaDetails {
            width
            height
            sizes {
              name
              sourceUrl
              width
            }
          }
        }
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
          excerpt(format: RAW)
          content(format: RENDERED)
          acf {
            backgroundColor
            interactiveColor
            category
            subtitle
            client
            links {
              icon
              link {
                title
                url
                target
              }
            }
            techList {
              techItem
            }
            featureImage {
              mediaItemUrl
              mimeType
              srcSet
              sourceUrl
              altText
              mediaDetails {
                width
                height
                sizes {
                  name
                  sourceUrl
                  width
                }
              }
            }
            flexibleContent {
              ... on Project_Acf_FlexibleContent_FullImage {
                fieldGroupName
                image {
                  mediaItemUrl
                  mimeType
                  srcSet
                  sourceUrl
                  altText
                  mediaDetails {
                    width
                    height
                    sizes {
                      name
                      sourceUrl
                      width
                    }
                  }
                }
              }
              ... on Project_Acf_FlexibleContent_CenteredImage {
                color
                fieldGroupName
                image {
                  mediaItemUrl
                  mimeType
                  srcSet
                  sourceUrl
                  altText
                  mediaDetails {
                    width
                    height
                    sizes {
                      name
                      sourceUrl
                      width
                    }
                  }
                }
              }
              ... on Project_Acf_FlexibleContent_DoubleImage {
                fieldGroupName
                images {
                  color
                  centred
                  image {
                    mediaItemUrl
                    mimeType
                    srcSet
                    sourceUrl
                    altText
                    mediaDetails {
                      width
                      height
                      sizes {
                        name
                        sourceUrl
                        width
                      }
                    }
                  }
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
              ... on Project_Acf_FlexibleContent_QuoteBlock {
                author
                fieldGroupName
                quote
              }
              ... on Project_Acf_FlexibleContent_TiledMockups {
                color
                direction
                fieldGroupName
                image {
                  altText
                  sourceUrl
                  mediaDetails {
                    height
                    width
                    sizes {
                      name
                      sourceUrl
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`

export { ALL_PROJECTS, MAIN_PAGE, IMAGES_ARRAY, SINGLE_PROJECT, NEXT_PROJECT, FIRST_PROJECT }
