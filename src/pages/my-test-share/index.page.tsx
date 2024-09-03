import { useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { copyUrl } from '@Utils/clipboard';
import { EOmctErrorNo } from '@Constant/errorKeyValue';
import { useShareWeb } from '@Hooks/useShareWeb';
import { useModal } from '@Base/hooks/useModal';
import ROUTE_PATH from '@Constant/routePath';
import AlertModal from '@Components/AlertModal';
import { isEmpty } from '@Base/utils/check';
import * as S from './style';
import { useRouter } from 'next/router';
import { cLocales } from '@Constant/locales';
import { withDefault } from '@Base/utils/dataExtension';

const MyTestShare = () => {
  const { t } = useTranslation();

  const {
    isOpen: isOpenAlertModal,
    message: alertModalMessage,
    open: openAlertModal,
    close: closeAlertModal,
  } = useModal({ defaultMessage: '' });

  const testUrl = useTestUrl();

  const handleWebShare = useShareWeb({
    onError: (reason) => {
      if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_KAKAO_BROWSER) {
        openAlertModal('alertKakao');
      } else if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_BROWSER) {
        openAlertModal('alertMacOS');
      } else if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_FUNCTION) {
        openAlertModal('alertNotSupportedBrowser');
      }
      // HJ TODO: assertion 함수 구현
    },
  });

  const handleCopyUrl = async () => {
    const copyAlertMsg = await copyUrl(testUrl);
    openAlertModal(copyAlertMsg);
  };

  return (
    <S.PageWrapper>
      <S.ContentWrapper>
        <S.GuideWrapper>
          <S.GuideMain>{t('myTestUrlCreated')}</S.GuideMain>
          <S.GuideSub>{t('myTestShareGuide')}</S.GuideSub>
        </S.GuideWrapper>
        <S.TestUrlWrapper>
          <S.TestUrlHeader>
            <h1>{t('myTestUrl')}</h1>
            <button onClick={handleCopyUrl}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </S.TestUrlHeader>
          <S.TestUrl>{testUrl}</S.TestUrl>
        </S.TestUrlWrapper>
      </S.ContentWrapper>

      <S.PrimaryButton onClick={handleWebShare}>
        {t('shareMyTestUrl')}
      </S.PrimaryButton>

      {/* HJ TODO: global하게 관리하는 것 or 일일이 작성하는 것 */}
      {isOpenAlertModal && !isEmpty(alertModalMessage) && (
        <AlertModal isOpen={isOpenAlertModal} handleClose={closeAlertModal}>
          {t(alertModalMessage)}
        </AlertModal>
      )}
    </S.PageWrapper>
  );
};

export default MyTestShare;

//#region sub components
//#endregion

//#region logics
const useTestUrl = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const origin =
    typeof window !== 'undefined' ? location.origin : 'https://omct.web.app';
  const locale = withDefault(router.locale, cLocales.en);
  const imageName = searchParams.get('imageName');
  const testUrl = `${origin}/${locale}${ROUTE_PATH.choiceColor}?imageName=${imageName}`;

  return testUrl;
};
//#endregion

//#region styled components
//#endregion
