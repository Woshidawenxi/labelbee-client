import React, { useContext } from 'react';
import AnnotationOperation from '@labelbee/lb-components';
import '@labelbee/lb-components/dist/index.css';
import { EIpcEvent } from '../constant/event';
import { AnnotationContext } from '../store';
import i18n from '@/i18n';

const electron = window.require && window.require('electron');

const Annotation = (props: any) => {
  const {
    dispatch,
    state: { currentProjectInfo, projectList, fileList },
  } = useContext(AnnotationContext);

  const onSubmit = (data: any[], submitType: any, i: number) => {
    // 翻页时触发当前页面数据的输出
    if (electron) {
      // 翻页时触发数据保存
      electron.ipcRenderer.send(
        EIpcEvent.SaveResult,
        data,
        currentProjectInfo?.path,
        currentProjectInfo?.resultPath,
      );
    }
  };

  const goBack = (imgList: any[]) => {
    dispatch({
      type: 'UPDATE_CURRENT_PROJECTINFO',
      payload: {
        projectInfo: undefined,
      },
    });

    // 清空默认操作
    dispatch({
      type: 'UPDATE_FILE_LIST',
      payload: {
        fileList: [],
      },
    });
  };

  const updateProjectInfo = (info: { imgIndex?: number; step?: number }) => {
    const newProjectList = projectList.map((item) => {
      return item.id === currentProjectInfo?.id ? { ...item, ...info } : item;
    });
    dispatch({
      type: 'UPDATE_PROJECT_LIST',
      payload: { projectList: newProjectList },
    });
  };

  const onPageChange = (imgIndex: number) => {
    // 保存当前页数到本地
    updateProjectInfo({ imgIndex });
  };

  const onStepChange = (step: number) => {
    // 保存当前步骤到本地
    updateProjectInfo({ step });
  };

  return (
    <div>
      <AnnotationOperation
        headerName={currentProjectInfo?.name}
        onSubmit={onSubmit}
        onPageChange={onPageChange}
        onStepChange={onStepChange}
        imgList={fileList.map((file: any) => ({
          ...file,
          url: 'file:///' + file.url,
        }))}
        goBack={goBack}
        stepList={currentProjectInfo?.stepList}
        step={currentProjectInfo?.step}
        defaultLang={i18n.language}
        initialIndex={currentProjectInfo?.imgIndex}
        showTips={true}
      />
    </div>
  );
};
export default Annotation;
