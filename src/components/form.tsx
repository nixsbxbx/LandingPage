import { Button } from "./button"
import type { FormEvent } from 'react';
import { useState } from 'react';

export const Form = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false)
    const handleSubmit = (e: FormEvent) =>{ e.preventDefault();
        const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        const isValid = regExp.test(inputValue);
        if(isValid){
            console.log("Correo Enviado");
            setError(false);
        }else{
            setError(true);
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value)
    }
    return (
        <div className="mb-[300px] absolute top-[-200px] left-0 right-0 mx-auto text-center py-10 px-6 bg-navy-850 rounded-[9px] w-[336px] md:w-[480px] xl:w-[720px]">            <h2 className="font-bold mb-4 text-[1.25rem]">Get early access today</h2>
            <p className="text-sm mb-8">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form className="flex flex-col gap-6 xl:flex-row" action="">                
            <input className="bg-white rounded-3xl placeholder:text-gray-400 text-center h-12 xl:flex-1"
                placeholder="email@example.com" required value={inputValue}
                type="email" />
                {
                    error && (<p className='text-Red-500 text-sm mt-[-12px]'>Please provide an valid Email</p>)
                }
                <Button styles="w-[200px]" text="Get Started For Free"/>
            </form>
        </div>
    )
}
