// It is necessary to add the typings of imported oomponents

declare module "react-native-button" {
  import React, {  Component } from "react";

  interface IButtonProps {
    style?: React.ViewStyle;
    styleDisabled?: React.ViewStyle;
    onPress?: () => any;
  }

  export default class Button extends Component<IButtonProps, any> { }
}


/*
// If you are lazy and don't care about the strict typings:

declare module "react-native-button" {
    const value: any;
    export default value;
}
*/


declare module "react-navigation" {
  import { Animated } from 'react-native'

  export interface NavigationState {
    /**
     * Index refers to the active child route in the routes array.
     */
    index: number,
    /**
     * An array of route definitions.
     */
    routes: Array<NavigationRoute>,

    /**
     * React's key used by some navigators. No need to specify these manually,
     * they will be defined by the router.
     *
     * NOTE: This was added to make function
     */
    key: string,
    /**
     * For example 'Home'.
     * This is used as a key in a route config when creating a navigator.
     *
     * NOTE: This was added to make function
     */
    routeName: string,
    /**
     * Path is an advanced feature used for deep linking and on the web.
     *
     * NOTE: This was added to make function
     */
    path?: string,
    /**
     * Params passed to this route when navigating to it,
     * e.g. `{ car_id: 123 }` in a route that displays a car.
     *
     * NOTE: This was added to make function
     */
    params?: NavigationParams,
  }

  export interface NavigationRoute {
    /**
     * Index refers to the active child route in the routes array.
     *
     * NOTE: This was added to make function
     */
    index: number,
    /**
     * An array of route definitions.
     *
     * NOTE: This was added to make function
     */
    routes: Array<NavigationRoute>,

    /**
     * React's key used by some navigators. No need to specify these manually,
     * they will be defined by the router.
     */
    key: string,
    /**
     * For example 'Home'.
     * This is used as a key in a route config when creating a navigator.
     */
    routeName: string,
    /**
     * Path is an advanced feature used for deep linking and on the web.
     */
    path?: string,
    /**
     * Params passed to this route when navigating to it,
     * e.g. `{ car_id: 123 }` in a route that displays a car.
     */
    params?: NavigationParams,
  }

  export interface NavigationRouter {
    /**
     * The reducer that outputs the new navigation state for a given action, with
     * an optional previous state. When the action is considered handled but the
     * state is unchanged, the output state is null.
     */
    getStateForAction: (
      action: NavigationAction,
      lastState: NavigationState,
    ) => NavigationState,

    /**
     * Maps a URI-like string to an action. This can be mapped to a state
     * using `getStateForAction`.
     */
    getActionForPathAndParams: (path: string, params?: NavigationParams) => NavigationAction,

    getPathAndParamsForState: (state: NavigationState) => {path: string, params?: NavigationParams},

    getComponentForRouteName: (routeName: string) => NavigationComponent,

    getComponentForState: (state: NavigationState) => NavigationComponent,

    /**
     * Gets the screen config for a given navigation screen prop.
     *
     * For example, we could get the config for a 'Foo' screen when the
     * `navigation.state` is:
     *
     *  {routeName: 'Foo', key: '123'}
     */
    getScreenConfig: (
      navigation: NavigationScreenProp<NavigationRoute, NavigationAction>,
      optionName: string,
    ) => any, // todo, fix this any type to become a key of NavigationScreenConfig
  }

  export type NavigationScreenOption<T> =
    (navigation: NavigationScreenProp<NavigationRoute, NavigationAction>,
       config: any, // NavigationScreenOptionConfig,
       router?: NavigationRouter) => T
    | T;

  export interface HeaderConfig {
    /**
     * Title string used by the navigation bar, or a custom component
     */
    title?: string | React.ReactElement<any>,

    /**
     * Whether the navigation bar is visible.
     */
    visible?: boolean,

    /**
     * Renders a custom right component
     */
    right?: React.ReactElement<any>,

    /**
     * Renders a custom left component
     */
    left?: React.ReactElement<any>,

    /**
     * Style passed into navigation bar container
     */
    style?: Object,

    // // Style of title text
    // titleTextStyle?: $NavigationThunk<Object>,
    // // Tint color of navigation bar contents
    // tintColor?: $NavigationThunk<string>,
    // // Navigation bar height
    // height?: $NavigationThunk<number>,
    // // Navigation bar translucentcy
    // translucent?: $NavigationThunk<boolean>,
    // // Renders a custom left component
    // renderLeft?: React.ReactElement<any> |
    //   (navigation: NavigationProp<any>, canGoBack: boolean) => React.ReactElement<any>,
    // // Renders a custom navigation bar background
    // renderBackground?: $NavigationThunk<React.ReactElement<any>>,
  }

  export interface TabBarConfig {
    /**
     * Icon used by the tab bar.
     */
    icon?: (options: { tintColor: string, focused: boolean }) => React.ReactElement<any>;
    /**
     * Label text used by the tab bar.
     */
    label?: string;
  }

  export interface DrawerConfig {
    /**
     * Icon used by the drawer.
     */
    icon?: (options: { tintColor: string, focused: boolean }) => React.ReactElement<any>;
    /**
     * Label text used by the drawer.
     */
    label?: string;
  }

  export interface NavigationScreenOptions {
    /**
     * Title is rendered by certain navigators, e.g. the tab navigator,
     * or on web as the title of the browser tab.
     */
    title?: NavigationScreenOption<string>;
    /**
     * Options passed to the navigation bar for this screen.
     */
    header?: NavigationScreenOption<HeaderConfig>;
    /**
     * Options passed to the tab bar for this screen.
     */
    tabBar?: NavigationScreenOption<TabBarConfig>;
    /**
     * Options passed to the drawer for this screen.
     */
    drawer?: NavigationScreenOption<DrawerConfig>;
  }

  export interface NavigationScreenConfig {
    title?: string,
    header?: HeaderConfig,
    tabBar?: TabBarConfig,
    drawer?: DrawerConfig;
  }

  export type NavigationComponent = NavigationScreenComponent<any, any> | NavigationNavigator<any>;

  export interface NavigationScreenComponent<P, S> extends React.Component<P, S> {
    navigationOptions?: NavigationScreenOptions,
  }

/*
  export class NavigationNavigator<T> extends React.ComponentClass<T> {
    router?: NavigationRouter,
    navigationOptions?: NavigationScreenOptions
  }
*/

  export interface NavigationNavigator<T> extends React.ComponentClass<T> {
    router?: NavigationRouter,
    navigationOptions?: NavigationScreenOptions
  }

/*
  export type NavigationNavigator<T> = React.ComponentClass<T> & {
    router?: NavigationRouter,
    navigationOptions?: NavigationScreenOptions
  }
*/

  export interface NavigationParams {
    [key: string]: string,
  }

  export interface NavigationNavigateAction {
    type: 'Navigate',
    routeName: string,
    params?: NavigationParams,

    // The action to run inside the sub-router
    action?: NavigationNavigateAction,
  }

  export interface NavigationBackAction {
    type: 'Back',
    key?: string,
  }

  export interface NavigationSetParamsAction {
    type: 'SetParams',

    // The key of the route where the params should be set
    key: string,

    // The new params to merge into the existing route params
    params?: NavigationParams,
  }

  export interface NavigationInitAction {
    type: 'Init',
  }

  export interface NavigationResetAction {
    type: 'Reset',
    index: number,
    actions: Array<NavigationNavigateAction>,
  }

  export interface NavigationContainerOptions {
    // This is used to extract the path from the URI passed to the app for a deep link
    URIPrefix?: string,
  }

  export interface NavigationContainerConfig {
    containerOptions?: NavigationContainerOptions,
  }

  export interface NavigationStackViewConfig {
    mode?: 'card' | 'modal',
    headerMode?: HeaderMode,
    headerComponent?: React.ComponentClass<HeaderProps>,
  }

  export interface NavigationStackRouterConfig {
    initialRouteName?: string,
    initialRouteParams?: NavigationParams,
    paths?: NavigationPathsConfig,
    navigationOptions?: NavigationScreenOptions,
  }

  export type NavigationStackAction =
    | NavigationInitAction
    | NavigationNavigateAction
    | NavigationBackAction
    | NavigationSetParamsAction
    | NavigationResetAction;

  export type NavigationTabAction =
    | NavigationInitAction
    | NavigationNavigateAction
    | NavigationBackAction;

  export type NavigationAction =
    | NavigationInitAction
    | NavigationStackAction
    | NavigationTabAction;

  export interface NavigationScreenRouteConfig {
    /** React component or navigator to render for this route */
    screen: NavigationScreenComponent<any, any> | NavigationNavigator<any>,
    navigationOptions?: NavigationScreenOptions,
    path?: string,
  }

  export interface NavigationLazyScreenRouteConfig {
    /** React component or navigator to lazily require and render for this route */
    getScreen: () => (NavigationScreenComponent<any, any> | NavigationNavigator<any>),
    navigationOptions?: NavigationScreenOptions,
    path?: string,
  }

  export type NavigationRouteConfig =
    | NavigationScreenRouteConfig
    | NavigationLazyScreenRouteConfig

  export interface NavigationPathsConfig {
    [routeName: string]: string,
  }

  export interface NavigationTabRouterConfig {
    initialRouteName?: string,
    paths?: NavigationPathsConfig,
    navigationOptions?: NavigationScreenOptions,
    order?: Array<string>, // todo: type these as the real route names rather than 'string'

    // Does the back button cause the router to switch to the initial tab
    backBehavior?: 'none' | 'initialRoute', // defaults `initialRoute`
  }

  export interface NavigationRouteConfigMap {
    [routeName: string]: NavigationRouteConfig,
  }

  export type NavigationDispatch<A> = (action: A) => boolean

  export interface NavigationProp<S, A> {
    state: S,
    dispatch: NavigationDispatch<A>,
  }

  export interface NavigationScreenProp<S, A> {
    state: S,
    dispatch: NavigationDispatch<A>,
    goBack: (routeKey?: string) => boolean,
    navigate: (routeName: string, params?: NavigationParams, action?: NavigationAction) => boolean,
    setParams: (newParams: NavigationParams) => boolean,
  }

  export interface NavigationNavigatorProps {
    navigation: NavigationProp<NavigationState, NavigationAction>,
  }

  /**
   * Gestures, Animations, and Interpolators
   */

  export type NavigationAnimatedValue = Animated.AnimatedValue

  export type NavigationGestureDirection = 'horizontal' | 'vertical'

  export interface NavigationLayout {
    height: NavigationAnimatedValue,
    initHeight: number,
    initWidth: number,
    isMeasured: boolean,
    width: NavigationAnimatedValue,
  }

  export interface NavigationScene {
    index: number,
    isActive: boolean,
    isStale: boolean,
    key: string,
    route: NavigationRoute,
  }

  export interface NavigationTransitionProps {
    // The layout of the transitioner of the scenes.
    layout: NavigationLayout,

    // The navigation state of the transitioner.
    navigationState: NavigationState,

    // The progressive index of the transitioner's navigation state.
    position: NavigationAnimatedValue,

    // The value that represents the progress of the transition when navigation
    // state changes from one to another. Its numberic value will range from 0
    // to 1.
    //  progress.__getAnimatedValue() < 1 : transtion is happening.
    //  progress.__getAnimatedValue() == 1 : transtion completes.
    progress: NavigationAnimatedValue,

    // All the scenes of the transitioner.
    scenes: Array<NavigationScene>,

    // The active scene, corresponding to the route at
    // `navigationState.routes[navigationState.index]`. When rendering
    // NavigationSceneRendererPropsIndex, the scene does not refer to the active
    // scene, but instead the scene that is being rendered. The index always
    // is the index of the scene
    scene: NavigationScene,
    index: number,

    // The gesture distance for `horizontal` and `vertical` transitions
    gestureResponseDistance?: number,
  }

  // The scene renderer props are nearly identical to the props used for rendering
  // a transition. The exception is that the passed scene is not the active scene
  // but is instead the scene that the renderer should render content for.
  export type NavigationSceneRendererProps = NavigationTransitionProps

  export interface NavigationPanHandlers {
    onMoveShouldSetResponder: () => void,
    onMoveShouldSetResponderCapture: () => void,
    onResponderEnd: () => void,
    onResponderGrant: () => void,
    onResponderMove: () => void,
    onResponderReject: () => void,
    onResponderRelease: () => void,
    onResponderStart: () => void,
    onResponderTerminate: () => void,
    onResponderTerminationRequest: () => void,
    onStartShouldSetResponder: () => void,
    onStartShouldSetResponderCapture: () => void,
  }

  export interface NavigationTransitionSpec {
    duration?: number,
    // An easing function from `Easing`.
    easing?: () => any,
    // A timing function such as `Animated.timing`.
    timing?: (value: NavigationAnimatedValue, config: any) => any,
  }

  export type NavigationAnimationSetter = (
    position: NavigationAnimatedValue,
    newState: NavigationState,
    lastState: NavigationState,
  ) => void

  export type NavigationSceneRenderer = (
    props: NavigationSceneRendererProps,
  ) => React.ReactElement<any>

  export type NavigationStyleInterpolator = (
    props: NavigationSceneRendererProps,
  ) => Object

  export type HeaderMode = 'float' | 'screen' | 'none'

  export interface HeaderProps extends NavigationSceneRendererProps {
    mode: HeaderMode,
    onNavigateBack: Function,
    renderLeftComponent: SubViewRenderer,
    renderRightComponent: SubViewRenderer,
    renderTitleComponent: SubViewRenderer,
    style?: any,
  }

  type SubViewRenderer = (subViewProps: SubViewProps) => React.ReactElement<any>

  interface SubViewProps extends NavigationSceneRendererProps {
    onNavigateBack: () => void
  }

  interface NavigationContainerProps {
    navigation: NavigationProp<NavigationState, NavigationAction>
  }

  interface NavigationContainerState {
    nav: NavigationState
  }

  export type StackNavigatorConfig =
    & NavigationContainerConfig
    & NavigationStackViewConfig
    & NavigationStackRouterConfig

  export interface TabViewConfig {
    tabBarComponent?: React.ComponentClass<any>;
    tabBarPosition?: 'top' | 'bottom';
    tabBarOptions?: {};
    swipeEnabled?: boolean;
    animationEnabled?: boolean;
    lazyLoad?: boolean;
  }

  export type TabNavigatorConfig =
    & NavigationTabRouterConfig
    & TabViewConfig
    & NavigationContainerConfig

  export interface DrawerViewConfig {
    drawerWidth: number,
    contentComponent: React.ComponentClass<any>,
    contentOptions?: {},
    style?: any;
  }

  export type DrawerNavigatorConfig =
    & NavigationContainerConfig
    & NavigationTabRouterConfig
    & DrawerViewConfig

  interface TransitionerProps {
    configureTransition: (
      transitionProps: NavigationTransitionProps,
      prevTransitionProps: NavigationTransitionProps,
    ) => NavigationTransitionSpec,
    navigationState: NavigationState,
    onTransitionEnd: () => void,
    onTransitionStart: () => void,
    render: (
      transitionProps: NavigationTransitionProps,
      prevTransitionProps: NavigationTransitionProps
    ) => any,
    style: any
  }

  interface TransitionerState {
    layout: NavigationLayout,
    position: NavigationAnimatedValue,
    progress: NavigationAnimatedValue,
    scenes: Array<NavigationScene>
  }

  export interface TransitionConfig {
    // The basics properties of the animation, such as duration and easing
    transitionSpec?: NavigationTransitionSpec,
    // How to animate position and opacity of the screen
    // based on the value generated by the transitionSpec
    screenInterpolator?: (props: NavigationSceneRendererProps) => Object
  }

  interface CardStackProps {
    screenProps?: {};
    headerMode: HeaderMode,
    headerComponent?: React.ComponentClass<HeaderProps>,
    mode: 'card' | 'modal',
    navigation: NavigationScreenProp<NavigationState, NavigationAction>,
    router: NavigationRouter,
    cardStyle?: any,
    style: any,
    gestureResponseDistance?: number,
    /**
     * If true, enable navigating back by swiping (see CardStackPanResponder).
     * TODO move this to TransitionConfig.
     */
    gesturesEnabled: boolean,
    /**
     * Optional custom animation when transitioning between screens.
     */
    transitionConfig?: TransitionConfig,
  }

  interface CardStackDefaultProps {
    mode: 'card' | 'modal',
    gesturesEnabled: boolean,
    headerComponent: React.ComponentClass<HeaderProps>,
  }

  export interface DrawerViewConfig {
    drawerWidth: number,
    contentComponent: React.ComponentClass<any>,
    contentOptions?: {},
    style?: any;
  }

  interface DrawerViewProps extends DrawerViewConfig {
    screenProps?: {};
    router: NavigationRouter;
    navigation: NavigationScreenProp<NavigationState, NavigationAction>;
  }

  export interface TabViewConfig {
    tabBarComponent?: React.ComponentClass<any>;
    tabBarPosition?: 'top' | 'bottom';
    tabBarOptions?: {};
    swipeEnabled?: boolean;
    animationEnabled?: boolean;
    lazyLoad?: boolean;
  }

  interface TabViewProps extends TabViewConfig {
    screenProps?: {},
    navigation: NavigationScreenProp<NavigationState, NavigationAction>;
    router: NavigationRouter,
    childNavigationProps: { [key: string]: NavigationScreenProp<NavigationRoute, NavigationAction> },
  }

  export function createNavigationContainer(

  ): React.Component<NavigationContainerProps, NavigationContainerState>

  export var StateUtils: {
    get(state: NavigationState, key: string): NavigationRoute;
    indexOf(state: NavigationState, key: string): number;
    has(state: NavigationState, key: string): boolean;
    push(state: NavigationState, route: NavigationRoute): NavigationState;
    pop(state: NavigationState): NavigationState;
    jumpToIndex(state: NavigationState, index: number): NavigationState;
    jumpTo(state: NavigationState, key: string): NavigationState;
    back(state: NavigationState): NavigationState;
    forward(state: NavigationState): NavigationState;
    replaceAt(state: NavigationState, key: string, route: NavigationRoute): NavigationState;
    replaceAtIndex(state: NavigationState, index: number, route: NavigationRoute): NavigationState;
    reset(state: NavigationState, routes: Array<NavigationRoute>, index?: number): NavigationState;
  }

  // export class PropTypes extends Object {}

  export function addNavigationHelpers(
    navigation: NavigationProp<NavigationRoute, NavigationAction>
  ): NavigationScreenProp<NavigationRoute, NavigationAction>

  export function createNavigator(
    router: NavigationRouter
  ): (View: NavigationNavigator<NavigationNavigatorProps>) => NavigationNavigator<NavigationNavigatorProps>

  export function StackNavigator(
    routeConfigMap: NavigationRouteConfigMap, config: StackNavigatorConfig
  ): NavigationNavigator<NavigationNavigatorProps>

  export function TabNavigator(
    routeConfigMap: NavigationRouteConfigMap,
    config: TabNavigatorConfig
  ): NavigationNavigator<NavigationNavigatorProps>

  export function DrawerNavigator(
    routeConfigMap: NavigationRouteConfigMap,
    config: DrawerNavigatorConfig
  ): NavigationNavigator<NavigationNavigatorProps>

  export function StackRouter(
    routeConfigs: NavigationRouteConfigMap,
    stackConfig: NavigationStackRouterConfig,
  ): NavigationRouter

  export function TabRouter(
    routeConfigs: NavigationRouteConfigMap,
    config: NavigationTabRouterConfig
  ): NavigationRouter

  export class Transitioner extends React.Component<TransitionerProps, TransitionerState> {}

  export class CardStack extends React.Component<CardStackProps, void> {}

  export class DrawerView extends React.PureComponent<DrawerViewProps, void> {}

  export class TabView extends React.PureComponent<TabViewProps, any> {}
}