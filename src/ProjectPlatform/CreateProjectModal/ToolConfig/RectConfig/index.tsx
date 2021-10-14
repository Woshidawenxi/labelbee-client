// import SenseInput from '@/components/customAntd/Input';
import { Col, Row, Switch, Input as SenseInput, Form, FormInstance } from 'antd';
import React from 'react';
import styles from '../index.module.scss';
import { MapStateJSONTab } from './AttributeConfig';
import TextConfigurable from '../TextConfigurable';
import { ETextType, EToolName } from '@/constant/store';
import { toolCommonField } from '../publicConfig';

function checkNumber(v: string) {
  const reg = /^[1-9]\d*$/g;
  if (reg.test(v)) {
    return true;
  }
  return false;
}

export const rectScopeChange = (value: string) => {
  if (value.length === 0) {
    return undefined;
  }
  if (!checkNumber(value)) {
    return;
  }
  return ~~value
};

interface IProps {
  toolName?: EToolName;
  form?: FormInstance;
}

const minWidth = 1, minHeight = 1;
const isAllReadOnly = false;

const RectConfig = (props: IProps) => {
  return (
    <React.Fragment>
      <div className={styles.selectedMain}>
        <Row>
          <Col span={6}><div className={styles.selectedName}>最小尺寸</div></Col>
          <Col span={8}>
            <Form.Item name="minWidth" initialValue={minWidth}>
              <SenseInput type='text' suffix={<div>W</div>} disabled={isAllReadOnly} />
            </Form.Item>
          </Col>
          <Col span={1} />
          <Col span={8}>
            <Form.Item name="minHeight" initialValue={minHeight}>
              <SenseInput type='text' suffix={<div>H</div>} disabled={isAllReadOnly} />
            </Form.Item>
          </Col>
        </Row>
      </div>
      {toolCommonField.map((info, index) => (
        <Form.Item
          label={<span className={styles.formTitle}>{info.name}</span>}
          valuePropName='checked'
          key={info.key} name={info.key} initialValue={info.value}>
          <Switch />
        </Form.Item>
      ))}
      <Form.Item
        label={<span className={styles.formTitle}>文本标注</span>}
        name='textConfigurableContext'
        initialValue={{
          textConfigurable: false,
          textCheckType: ETextType.AnyString,
          customFormat: '',
        }}>
        <TextConfigurable />
      </Form.Item>
      <Form.Item valuePropName='checked'
                 label={<span className={styles.formTitle}>属性标注</span>}
                 name='attributeConfigurable'
                 initialValue={false}
      >
        <Switch disabled={isAllReadOnly} />
      </Form.Item>

      <Form.Item noStyle shouldUpdate>
        {() => {
          return props.form?.getFieldValue('attributeConfigurable') && (
            <Form.Item label=" " name='attributeList' initialValue={[{
              key: '类别1',
              value: '类别1',
            }]}>
              <MapStateJSONTab
                isAttributeList={true}
                readonly={isAllReadOnly}
              />
            </Form.Item>);
        }}
      </Form.Item>
    </React.Fragment>
  );
};

export default RectConfig;
// function mapStateToProps({ editAnnotation, createStep, stepConfig }: any) {
//   return { editAnnotation, createStep, stepConfig };
// }

// export default connect(mapStateToProps)(RectConfig);