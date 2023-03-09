import { useForm } from "react-hook-form";

const App = () => {
    const { register, handleSubmit, watch } = useForm();
    // const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data: any) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue="test"/>
        {/* <input name="example" defaultValue="test" ref={register} /> */}
        <input type="submit" />
        </form>
    );
};
