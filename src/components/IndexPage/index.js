import Head from 'next/head';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';


function IndexPage() {
    useEffect(()=>{
    TagManager.initialize({gtmId: 'GTM-PQM8TPS'})
  },[])
  
    return (
        <>
            <Head>
                <meta name="description" content="Site Alurakut (baseado no Orkut)" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="https://i.postimg.cc/kMhscPdk/Orkut-Logo-2.png" type="image/png" />
                <title>Alurakut</title>
            </Head>
        </>
    )
}

export default IndexPage
