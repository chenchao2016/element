import ElInputButton from './src/input-button';

/* istanbul ignore next */
ElInputButton.install = function(Vue) {
  Vue.component(ElInputButton.name, ElInputButton);
};

export default ElInputButton;
