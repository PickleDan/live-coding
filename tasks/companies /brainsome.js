
/**
 * 1. Улучшите код компонента
 *
 * 2. Напишите хук для загрузки данных, который сможет принимать произвольные урлы для загрузки.
 *    Перейдите на использование нового хука в приведённом коде.
 */


import React, { useEffect, useState, FC } from 'react';

interface IUserRequest {
    url: string
}

const useRequest = <T>(props: IUserRequest): T  => {
    const {url} = props

    const [data, setData] = useState<T | null>(null);

    // AbortController API

    useEffect(() => {
        const fetchData = async () => {
            setReuestStatus('loading')

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    setReuestStatus('failed')
                    throw new Error('can not make request')
                } else {
                    const result = await response.json();

                    setReuestStatus('successfull')
                    return result
                }
            } catch (error) {
                setReuestStatus('failed')
            }
        }

        fetchData().then((res) => {
            result?.data && setData(result.data.ip);
        })

    }, [url]);

    return data
}

type RequestStatus = 'idle' | 'loading' | 'successfull' | 'failed';

const User: FC<{ name?: string }> = ({ name }) => {
    const [reuestStatus, setReuestStatus] = useState<RequestStatus>('idle')

    const data = useRequest<string>('https://api.ipify.org/?format=json')


    switch(reuestStatus) {
        case 'loading': {
            return <div>Loading...</div>
            break;
        }
        case 'successfull': {
            return (
                <>
                    <div>Name: {name || 'unknown'}</div>
                    <div>IP: {ip}</div>
                </>
            );
            break;
        }
        case 'failed': {
            return <div>Smt went wrong...</div>
            break;
        )
        }
    }

};

export default User;
