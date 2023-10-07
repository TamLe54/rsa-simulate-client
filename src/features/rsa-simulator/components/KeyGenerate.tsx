import type { AccountToGenerateKey } from '../api';

import { Button, Form, Input, Spin } from 'antd';
import { useForm } from 'antd/es/form/Form';
import clsx from 'clsx';
import { useState } from 'react';

import { useKeyGenerate } from '../api';

//get email and password then return the pair of keys

export const KeyGenerate = () => {
  const [form] = useForm();
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const mutateGenerateKey = useKeyGenerate();

  const onFinish = async (values: any) => {
    setIsGenerating(true);
    const account: AccountToGenerateKey = {
      email: values.email,
      password: values.password,
    };
    const result = await mutateGenerateKey.mutateAsync(account);

    if (result) {
      setPublicKey(result.publicKey);
      setPrivateKey(result.privateKey);
    }

    setIsGenerating(false);
  };

  return (
    <div className={clsx('w-full h-fit p-5', 'flex flex-row gap-5', 'typo-body-2-semibold')}>
      <div className={clsx('accout-info', 'w-[30%]', 'flex flex-col flex-end')}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name={'email'} label="Email" required>
            <Input type="email" size="large" disabled={isGenerating} />
          </Form.Item>

          <Form.Item name={'password'} label="Password" required>
            <Input type="password" size="large" disabled={isGenerating} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" className="w-full" size="large" disabled={isGenerating}>
              {isGenerating ? <Spin /> : <>Send</>}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={clsx('pair-of-key', 'w-70%', 'flex flex-col gap-5 flex-1 px-10', 'typo-body-1-medium')}>
        <div className="flex flex-col gap-2">
          Public key
          <Input.TextArea
            value={publicKey}
            autoSize={{
              minRows: 5,
              maxRows: 7,
            }}
            className="overflow-auto"
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2">
          Private key
          <Input.TextArea
            value={privateKey}
            autoSize={{
              minRows: 5,
              maxRows: 7,
            }}
            className="overflow-auto"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
