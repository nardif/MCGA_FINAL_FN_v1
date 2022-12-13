import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './../../../redux/thunks';
import { useForm } from "react-hook-form";
import store from '../../../redux/store';
import Button from '../../Sharedbuttons/buttons';
import Input from '../../SharedImputs/inputs';
import styles from '../products/Products.module.css';
import Modal from '../../Sharedmodals';


const Login = () => {    //hace un get del dispatcher
    const dispatch = useDispatch();
    //busca el store
    const users = useSelector((store) => store.users.list);
    const error = useSelector((store) => store.users.error);
    const isLoading = useSelector((store) => store.users.isFetching);

    //modal
    const [isLoggin, setIsLoggin] = useState(false);
    const[userToLogin, setUserToLogin] = useState();


    const {
        register, //Hook para tomar los inputs del form
        handleSubmit, //ejecuta el onSubmit
        formState: { errors },
      } = useForm({
        defaultValues: userToLogin || null,
      });

      //EN LOS PROXIMOS 2 VER DE PASAR UN DISPATCH QUE HAGA LA AUTORIZACION DEL USUARIO
      //AGREAGAR
    //   const onSubmit = (user) => {
    //     console.log(user);
    //     dispatch(getUsers(users));
    //   };

      //UPDATE
      const handleLogUser = (user) => {
        setIsLoggin(true);
        setUserToLogin(user)
      };
      const submitLoggin = (user) => {
        console.log(user)
        dispatch(getUsers(userToLogin._id, {
            email: user.email,
            password: user.password
        }));
        setIsLoggin(false);
        setUserToLogin({});
      }
     

    useEffect(() => {
        // trae la lista de USUARIOS cuando el store esta vacío
        if (!users.length) {
            // el dispatch ejecuta la acción asíncrona de redux para traer la lista de USUARIOS
            dispatch(getUsers());
        }
    }, [users]);

    if (error) {
        return <p>Error </p>
    }
  
    if (isLoading) {
        return <p>Loading... </p>
    }
  

    users.map((user) => {
        return (
            handleLogUser(user)
            )
        }
    )

    return (
      <section className={styles.body}>
                
                {/* Modal LOGIN */}
                <Modal  isOpen={isLoggin} title={"Please log in"}
                    handleClose={() => {
                           setIsLoggin(false);
                           setUserToLogin({});
                        }}>
                    <form onSubmit={handleSubmit(submitLoggin)}>
                        <Input
                            type="text"
                            name={"email"}
                            register={register} //VER
                            label="Email:"
                            required={true}
                            errors={errors.email}
                        />
                        <Input
                            type="text"
                            name={"password"}
                            register={register} //VER
                            label="Password:"
                            required={true}
                            errors={errors.password}
                        />
                        <Button value='login' type='submit'></Button>
                    </form>
                </Modal>
      </section>
    );
};
  export default Login;