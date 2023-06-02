import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PageTitle = (props) => {
    const { locale, locales, asPath } = useRouter();

    return(
        <section className="wpo-page-title"
        
        style={{ backgroundImage: `url(${
           props?.background?.url
       })
       ` }}
        
        >
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ol className="wpo-breadcumb-wrap ">
                                <li><Link href="/">
                                {locale === 'sv' ? 'Start sida' : 'الرئيسية'}
                                    {/* Home */}
                                </Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;