import type { Metadata } from 'next'
import type { LangData } from '@/types/LangData'
import type { FixedArray } from '@/types/FixedArray'

const baseUrl = 'https://www.kimgiutae.dev'

const pages: FixedArray<Page, 6> = [
  {
    name: 'home',
    data: {
      en: {
        meta: {
          title: 'Jonathan Kim - React Front-End Developer',
          keywords: 'Jonathan Kim, Front-End, React, Next.js, Developer, Software, Brazil',
          description: '',
          alternates: {
            canonical: baseUrl,
            languages: {
              es: `${baseUrl}/es`,
              pt: `${baseUrl}/pt`
            }
          }
        },
        path: '/',
        label: 'Home'
      },
      es: {
        meta: {
          title: 'Jonathan Kim - Desarrollador Front-End',
          keywords: 'Gui Tae Jonathan Kim, Front-End, React, Next.js, Developer, Software, Brazil',
          description: '',
          alternates: {
            canonical: `${baseUrl}/es`,
            languages: {
              en: baseUrl,
              pt: `${baseUrl}/pt`
            }
          }
        },
        path: '/es',
        label: 'Inicio'
      },
      pt: {
        meta: {
          title: 'Jonathan Kim - Desenvolvedor Front-End',
          keywords: 'Gui Tae Jonathan Kim, Front-End, React, Next.js, Developer, Software, Brazil',
          description: '',
          alternates: {
            canonical: `${baseUrl}/pt`,
            languages: {
              en: baseUrl,
              es: `${baseUrl}/es`
            }
          }
        },
        path: '/pt',
        label: 'Início'
      }
    }
  },
  {
    name: 'about',
    data: {
      en: {
        meta: {
          title: 'About me',
          keywords: 'Gui Tae Jonathan Kim, Front-End, React, Next.js, Developer, Software, Brazil',
          alternates: {
            canonical: `${baseUrl}/about`,
            languages: {
              es: `${baseUrl}/es/sobre`,
              pt: `${baseUrl}/pt/sobre`
            }
          }
        },
        path: '/about',
        label: 'About me'
      },
      es: {
        meta: {
          title: 'Sobre mi',
          keywords: 'Gui Tae Jonathan Kim, Front-End, React, Next.js, Developer, Software, Brazil',
          alternates: {
            canonical: `${baseUrl}/es/sobre`,
            languages: {
              en: `${baseUrl}/about`,
              pt: `${baseUrl}/pt/sobre`
            }
          }
        },
        path: '/es/sobre',
        label: 'Sobre mí'
      },
      pt: {
        meta: {
          title: 'Sobre mim',
          keywords: 'Gui Tae Jonathan Kim, Front-End, React, Next.js, Developer, Software, Brazil',
          alternates: {
            canonical: `${baseUrl}/pt/sobre`,
            languages: {
              en: `${baseUrl}/about`,
              es: `${baseUrl}/es/sobre`
            }
          }
        },
        path: '/pt/sobre',
        label: 'Sobre mim'
      }
    }
  },
  {
    name: 'portfolio',
    data: {
      en: {
        meta: {
          title: 'Portfolio',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/portfolio`,
            languages: {
              es: `${baseUrl}/es/portfolio`,
              pt: `${baseUrl}/pt/portfolio`
            }
          }
        },
        path: '/portfolio',
        label: 'Portfolio'
      },
      es: {
        meta: {
          title: 'Portfolio',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/es/portfolio`,
            languages: {
              en: `${baseUrl}/portfolio`,
              pt: `${baseUrl}/pt/portfolio`
            }
          }
        },
        path: '/es/portfolio',
        label: 'Portfolio'
      },
      pt: {
        meta: {
          title: 'Portfolio',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/pt/portfolio`,
            languages: {
              en: `${baseUrl}/portfolio`,
              es: `${baseUrl}/es/portfolio`
            }
          }
        },
        path: '/pt/portfolio',
        label: 'Portfolio'
      }
    }
  },
  {
    name: 'laboratory',
    data: {
      en: {
        meta: {
          title: 'Laboratory',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/laboratory`,
            languages: {
              es: `${baseUrl}/es/laboratorio`,
              pt: `${baseUrl}/pt/laboratorio`
            }
          }
        },
        path: '/laboratory',
        label: 'Laboratory'
      },
      es: {
        meta: {
          title: 'Laboratorio',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/es/laboratorio`,
            languages: {
              en: `${baseUrl}/laboratory`,
              pt: `${baseUrl}/pt/laboratorio`
            }
          }
        },
        path: '/es/laboratorio',
        label: 'Laboratorio'
      },
      pt: {
        meta: {
          title: 'Laboratório',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/pt/laboratorio`,
            languages: {
              en: `${baseUrl}/laboratory`,
              es: `${baseUrl}/es/laboratorio`
            }
          }
        },
        path: '/pt/laboratorio',
        label: 'Laboratório'
      }
    }
  },
  {
    name: 'blog',
    data: {
      en: {
        meta: {
          title: 'Blog',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/blog`,
            languages: {
              es: `${baseUrl}/es/blog`,
              pt: `${baseUrl}/pt/blog`
            }
          }
        },
        path: '/blog',
        label: 'Blog'
      },
      es: {
        meta: {
          title: 'Blog',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/es/blog`,
            languages: {
              en: `${baseUrl}/blog`,
              pt: `${baseUrl}/pt/blog`
            }
          }
        },
        path: '/es/blog',
        label: 'Blog'
      },
      pt: {
        meta: {
          title: 'Blog',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/pt/blog`,
            languages: {
              en: `${baseUrl}/blog`,
              es: `${baseUrl}/es/blog`
            }
          }
        },
        path: '/pt/blog',
        label: 'Blog'
      }
    }
  },
  {
    name: 'contact',
    data: {
      en: {
        meta: {
          title: 'Contact',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/contact`,
            languages: {
              es: `${baseUrl}/es/contacto`,
              pt: `${baseUrl}/pt/contato`
            }
          }
        },
        path: '/contact',
        label: 'Contact'
      },
      es: {
        meta: {
          title: 'Contacto',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/es/contacto`,
            languages: {
              en: `${baseUrl}/contact`,
              pt: `${baseUrl}/pt/contato`
            }
          }
        },
        path: '/es/contacto',
        label: 'Contacto'
      },
      pt: {
        meta: {
          title: 'Contato',
          keywords: '',
          description: '',
          alternates: {
            canonical: `${baseUrl}/pt/contato`,
            languages: {
              en: `${baseUrl}/contact`,
              es: `${baseUrl}/es/contacto`
            }
          }
        },
        path: '/pt/contato',
        label: 'Contato'
      }
    }
  }
]

type PageData = {
  meta: Metadata
  path: string
  label: string
}

type Page = {
  name: 'home' | 'about' | 'portfolio' | 'laboratory' | 'blog' | 'contact'
  data: LangData<PageData>
}

export default pages
export type { Page, PageData }
