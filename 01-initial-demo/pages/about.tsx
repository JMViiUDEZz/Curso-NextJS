//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
//import { Navbar } from '../components/Navbar'

export default function AboutPage() {
  return (
      <>
      <h1>About Page</h1>
        
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={"description"}>
          Editar{' '}
          <code className={"code"}>pages/about.js</code>
        </p>
      </>
  )
}


AboutPage.getLayout = function getLayout ( page: JSX.Element ){
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}