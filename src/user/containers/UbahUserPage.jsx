import { Button } from '@/commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import getUser from '../services/getUser'
import getAllowedPermissions from '../services/getAllowedPermissions'

import FormUbahUser from '../components/FormUbahUser'

const UbahUserPage = props => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  const [user, setUser] = useState()
  const [allowedPermissions, setAllowedPermissions] = useState()

  useEffect(() => {
    const fetch = async () => {
	  const { data: userResponse } = await getUser({ id })
	  const { data: allowedPermissionsResponse } = await getAllowedPermissions()

	  setUser(userResponse.data)
	  setAllowedPermissions(allowedPermissionsResponse.data)
    }
    fetch()
  }, [])

  return user && allowedPermissions ? (
	<div>
	       	<Link to={`/settings/user/${id}`}>
	       	<Button className='absolute z-10 top-24 left-8' variant="secondary">
	       	  Kembali	
	       	</Button>
	       	</Link>
	       	
		<FormUbahUser
			{...{ user, allowedPermissions }}
			{...props}
		/> 
	</div>
  ) : <></>
}

export default UbahUserPage

