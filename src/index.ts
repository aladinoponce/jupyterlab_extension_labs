import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the test_labs extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'test_labs:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension test_labs is activated!');
  }
};

export default plugin;
