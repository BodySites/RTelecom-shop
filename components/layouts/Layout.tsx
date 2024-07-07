import Header from '../modules/Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <div></div>
    </>
  )
}

export default Layout
