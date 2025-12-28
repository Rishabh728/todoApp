import React from 'react'
import {Link, NavLink, useSearchParams} from 'react-router-dom'

const Navbar = () => {

   const [searchPArams] = useSearchParams();
    let todosDAta = searchPArams.get('todos');
  return (
      <nav>
         <Link to="/" className={todosDAta===null?"active":""}>All</Link>
         <Link to="/?todos=active" className={todosDAta==="active"?"active":""}>Active</Link>
         <Link to="/?todos=completed" className={todosDAta==="completed"?"active":""}>Completed </Link>
    </nav>
  )
}

export default Navbar