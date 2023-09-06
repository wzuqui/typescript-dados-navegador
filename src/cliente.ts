import { ClientJS } from 'clientjs';
import { getGPUTier } from 'detect-gpu';

export async function obterDadosCliente() {
  try {
    const client_js = new ClientJS();
    const retorno = {
      ip: await obterIp(),
      cpu: {
        cores: navigator.hardwareConcurrency,
      },
      internet: {
        megabits: navigator.connection?.downlink,
      },
      memoria: navigator.deviceMemory,
      resolucao: client_js.getCurrentResolution(),
      navegador: {
        nome: client_js.getBrowser(),
        versao: client_js.getBrowserVersion(),
      },
      placa_video: (await getGPUTier()).gpu,
      time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      sistema_operacional: await getUaDataValues(),
      outros: {
        client_js: {
          getSoftwareVersion: client_js.getSoftwareVersion(),
          getFingerprint: client_js.getFingerprint(),
          getUserAgent: client_js.getUserAgent(),
          getUserAgentLowerCase: client_js.getUserAgentLowerCase(),
          getBrowser: client_js.getBrowser(),
          getBrowserVersion: client_js.getBrowserVersion(),
          getBrowserMajorVersion: client_js.getBrowserMajorVersion(),
          isIE: client_js.isIE(),
          isChrome: client_js.isChrome(),
          isFirefox: client_js.isFirefox(),
          isSafari: client_js.isSafari(),
          isOpera: client_js.isOpera(),
          isMobileSafari: client_js.isMobileSafari(),
          getEngine: client_js.getEngine(),
          getEngineVersion: client_js.getEngineVersion(),
          getOS: client_js.getOS(),
          getOSVersion: client_js.getOSVersion(),
          isWindows: client_js.isWindows(),
          isMac: client_js.isMac(),
          isLinux: client_js.isLinux(),
          isUbuntu: client_js.isUbuntu(),
          isSolaris: client_js.isSolaris(),
          getDevice: client_js.getDevice(),
          getDeviceType: client_js.getDeviceType(),
          getDeviceVendor: client_js.getDeviceVendor(),
          getCPU: client_js.getCPU(),
          isMobile: client_js.isMobile(),
          isMobileMajor: client_js.isMobileMajor(),
          isMobileAndroid: client_js.isMobileAndroid(),
          isMobileOpera: client_js.isMobileOpera(),
          isMobileWindows: client_js.isMobileWindows(),
          isMobileBlackBerry: client_js.isMobileBlackBerry(),
          isMobileIOS: client_js.isMobileIOS(),
          isIphone: client_js.isIphone(),
          isIpad: client_js.isIpad(),
          isIpod: client_js.isIpod(),
          getScreenPrint: client_js.getScreenPrint(),
          getColorDepth: client_js.getColorDepth(),
          getCurrentResolution: client_js.getCurrentResolution(),
          getAvailableResolution: client_js.getAvailableResolution(),
          getDeviceXDPI: client_js.getDeviceXDPI(),
          getDeviceYDPI: client_js.getDeviceYDPI(),
          getPlugins: client_js.getPlugins(),
          isSilverlight: client_js.isSilverlight(),
          getSilverlightVersion: client_js.getSilverlightVersion(),
          isMimeTypes: client_js.isMimeTypes(),
          getMimeTypes: client_js.getMimeTypes(),
          getFonts: client_js.getFonts(),
          isLocalStorage: client_js.isLocalStorage(),
          isSessionStorage: client_js.isSessionStorage(),
          isCookie: client_js.isCookie(),
          getTimeZone: client_js.getTimeZone(),
          getLanguage: client_js.getLanguage(),
          getSystemLanguage: client_js.getSystemLanguage(),
          isCanvas: client_js.isCanvas(),
          getCanvasPrint: client_js.getCanvasPrint(),
        },
        getGPUTier: await getGPUTier(),
        getHighEntropyValues: await getHighEntropyValues(),
      },
    };
    return retorno;
  } catch (error) {
    return error;
  }
}

async function getUaDataValues() {
  try {
    const ua_data_values = await navigator.userAgentData!.getHighEntropyValues([
      'architecture',
      'bitness',
    ]);
    return {
      plataforma: ua_data_values.platform,
      arquitetura: ua_data_values.architecture,
      bitness: ua_data_values.bitness,
      mobile: ua_data_values.mobile,
    };
  } catch (error) {
    return null;
  }
}

async function getHighEntropyValues() {
  try {
    return await navigator.userAgentData!.getHighEntropyValues([
      'architecture',
      'bitness',
      'model',
      'platformVersion',
      'uaFullVersion',
      'fullVersionList',
    ]);
  } catch (error) {
    return null;
  }
}

async function obterIp() {
  // const response = await fetch('https://api.ipify.org?format=json');
  // const { ip } = await response.json();
  return null;
}
