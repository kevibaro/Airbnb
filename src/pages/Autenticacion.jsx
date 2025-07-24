import React from 'react'
import { useState, useEffect } from 'react'
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../../Supabaseclient'
import { Routes, Route, Link } from 'react-router-dom';

function Autenticacion() {
 const [session, setSession] = useState(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
        return () => subscription.unsubscribe()
    }, [])

    const signOut = async() =>{
        const{error} = await supabase.auth.signOut();
    };

   if (!session) {
      return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']} />)
    }
    else {
        return (
       
        <div>
          <Link to="/Supabase"><button>instrumentos</button></Link>
        <h2>Welcome,{session?.user?.email}</h2>
        <button onClick={signOut}>Cerrar</button>
        </div>)
    
    }
}

export default Autenticacion