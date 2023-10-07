import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import { RequestToDecrypt, useDataDecryption } from '../api';
import clsx from 'clsx';
import { Button, Form, Input, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export const Decrypt = () => {
  const [form] = useForm();
  const [decryptedData, setDecryptedData] = useState();
  const [isGenerating, setIsGenerating] = useState(false);

  const mutateDecryption = useDataDecryption();

  const onFinish = async (values: any) => {
    setIsGenerating(true);

    const requestToDecrypt: RequestToDecrypt = {
      email: values.email,
      password: values.password,
      encryptedData: values.encryptedData,
      privateKey: values.privateKey,
    };

    console.log(requestToDecrypt);

    const result = await mutateDecryption.mutateAsync(requestToDecrypt);

    if (result.success) {
      setDecryptedData(result.decryptedData);
    } else {
      setDecryptedData(result.message);
    }

    setIsGenerating(false);
  };

  return (
    <div className={clsx('w-full h-fit p-5', 'flex flex-col gap-5', 'typo-body-2-semibold')}>
      <div className="w-full h-fit">
        <Form form={form} onFinish={onFinish} layout="vertical" className="flex flex-row gap-7">
          <div className="flex flex-col gap-2 flex-1">
            <Form.Item name={'email'} label="Email" required>
              <Input type="email" size="large" disabled={isGenerating} />
            </Form.Item>
            <Form.Item name={'password'} label="Password" required>
              <Input type="password" size="large" disabled={isGenerating} />
            </Form.Item>
            <Form.Item name={'privateKey'} label={'Private Key'} required>
              <Input.TextArea
                autoSize={{
                  minRows: 10,
                  maxRows: 15,
                }}
                className="overflow-auto"
                disabled={isGenerating}
              />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-2 flex-1 h-fit">
            <Form.Item name={'encryptedData'} label={'Data need to be decrypted'} required className="pr-7">
              <Input.TextArea
                autoSize={{
                  minRows: 15,
                  maxRows: 20,
                }}
                className="overflow-auto"
                disabled={isGenerating}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" className="w-full" size="large" disabled={isGenerating}>
                {isGenerating ? <Spin /> : <>Send</>}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="w-full flex flex-col gap-5">
        {'Decrypted Data'}
        <Input.TextArea
          value={decryptedData}
          autoSize={{
            minRows: 10,
          }}
          className="overflow-auto"
          readOnly
        />
      </div>
    </div>
  );
};
