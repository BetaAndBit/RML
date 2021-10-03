/** 2020.10.22.01**/
class BookPreviewPublic {

    constructor() {
        this.isShowAlert = true;
    }

    setBookConfig(params) {
        for (var prop in params) {
            bookConfig[prop] = params[prop];
        }
        checkBookConfig();
    }

    isHasButton(name, enterName) {
        if (enterName) var button = toolBar.getButton(name, enterName);
        else var button = toolBar.getButton(name);
        if (button) return true
        else return false;
    }

    toolBarAddNewButton(button) {
        toolBar.setButtonTitle(button);
        toolBar.buttons.add(button);
    }

    showAlert() {
        if (!this.isShowAlert) return;
        this.time = 3000;

        if (!this.isShow) {
            this.isShow = true;
            var alert = $("<div style='display:none;z-index:99999;padding: 5px 20px;letter-spacing: 1px;left:50%;top:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);position:absolute;background:rgba(85,85,85,0.5);line-height:40px;font-size:18px;color:#fff;'>此设置无法实时预览，请点击<span style='color:#ffa500'> \"应用设置\" </span>按钮</div>");
            if (global.templeteName == 'brief') alert.html("此模板不支持实时预览，请点击<span style='color:#ffa500'> \"应用设置\" </span>按钮");
            tmpContainer.append(alert);
            alert.fadeIn(200);

            var timer = setInterval(function () {
                this.time -= 1000;
                if (this.time <= 0) {
                    alert.fadeOut(200, function () {
                        clearInterval(timer);
                        timer = null;
                        alert.remove();
                        this.isShow = false;
                    }.bind(this));
                }
            }.bind(this), 1000);

        }
    }
}

class BookPreviewInterface extends BookPreviewPublic {
    setBackgroundColor(params) { // bgBeginColor bgEndColor bgMRotation backgroundOpacity
        this.setBookConfig(params);
        if (backgroundObj != undefined) backgroundObj.resetBgColor();
    }
    setBackgroundImage(params) { // backGroundImgURL backgroundPosition
        this.setBookConfig(params);
        if (backgroundObj != undefined) backgroundObj.resetBgImg();
    }
    setToolbarColor(params) { // toolbarColor ToolBarAlpha
        this.setBookConfig(params);
        toolBar.resetToolbarColor();
    }
    setToolbarButtonColor(params) { // iconColor iconFontColor
        this.setBookConfig(params);
        toolBar.resetButtonColor();
    }
    setFormColor(params) { // formBackgroundColor formFontColor
        this.setBookConfig(params);
        if (global.aboutBody) global.aboutBody.resetFormColor();
        if (global.bookmark) global.bookmark.resetFormColor();
        if (global.downLoadBody) global.downLoadBody.resetFormColor();
        if (global.helpBody) global.helpBody.resetFormColor();
        if (global.printBody) global.printBody.resetFormColor();
        if (global.frmSearch) global.frmSearch.resetFormColor();
        if (global.sharePanel) global.sharePanel.resetFormColor();
        if (global.frmTableOfContent) global.frmTableOfContent.resetFormColor();
        if (global.thumbnail) global.thumbnail.resetFormColor();
        if (global.videoGallery) global.videoGallery.resetFormColor();
    }
    setBookLogo(params) { // appLogoIcon appLogoLinkURL appLogoOpenWindow logoPadding logoTop logoHeight
        this.setBookConfig(params);
        if (!bookConfig.appLogoIcon) {
            $('#logoBar').html('');
        } else {
            initLogoBar();
        }
    }
    setBookLargeLogo(params) { // appLargeLogoIcon isFixLogoSize appLargeLogoURL LargeLogoTarget logoFixWidth logoFixHeight
        this.setBookConfig(params);

        if (bookConfig.appLargeLogoIcon) {
            if (!global.largeAppLogo) global.largeAppLogo = new AppLargeLogo(bookContainer);
            else global.largeAppLogo.initCss();
        } else {
            if (global.largeAppLogo) global.largeAppLogo.hideLargeLogo();
        }

    }
    setFlippingTime(params) { // flippingTime
        this.setBookConfig(params);
    }
    preventPopupTheWebMenu(params) { // isStopMouseMenu
        this.setBookConfig(params);
    }
    showFlipShortcutButton() { // flipshortcutbutton
        if (bookConfig.flipshortcutbutton) return;
        bookConfig.flipshortcutbutton = true;
        if (!global.flipShotButton) global.flipShotButton = new FlipShotButton(tmpContainer);
        global.flipShotButton.show();
    }
    hideFlipShortcutButton() { // flipshortcutbutton
        if (!bookConfig.flipshortcutbutton) return;
        bookConfig.flipshortcutbutton = false;
        if (global.flipShotButton) flipShotButton.hide();
    }
    showQRCode() { // QRCode
        bookConfig.QRCode = true;
        if (!global.qrButton) global.qrButton = new QRButton(tmpContainer);
        global.qrButton.resetQRButton();
    }
    hideQRCode() { // QRCode
        if (global.qrCode) global.qrCode.hide();
        if (global.qrButton) global.qrButton.hide();
        bookConfig.QRCode = false;
    }
    showBackwardForwardButtons() {
        if (global.templeteName == 'brief') {
            // if(global.phoneGotoPagePanel) global.phoneGotoPagePanel.resetPosition();
            this.showAlert();
            return;
        }
        if (bookConfig.enablePageBack || this.isHasButton('backward')) return;
        bookConfig.enablePageBack = true;

        this.toolBarAddNewButton(new BackwardButton());
        this.toolBarAddNewButton(new ForwardButton());

        toolBar.sortXMLButton();
        toolBar.onResize();
    }
    hideBackwardForwardButtons() {
        bookConfig.enablePageBack = false;
        if (global.templeteName == 'brief') {
            // if(global.phoneGotoPagePanel) global.phoneGotoPagePanel.resetPosition();
            this.showAlert();
            return;
        } else {
            toolBar.removeButton('forward');
            toolBar.removeButton('backward');
        }
        toolBar.onResize();
    }
    setHomeButtonURL(params) { // HomeURL
        this.setBookConfig(params);
    }
    showHomeButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneHomeButton());
            this.showAlert();
            return;
        }
        if (bookConfig.HomeButtonVisible || this.isHasButton('home')) return;
        bookConfig.HomeButtonVisible = true;
        this.toolBarAddNewButton(new HomeButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
    }
    hideHomeButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.HomeButtonVisible) return;
        bookConfig.HomeButtonVisible = false;
        toolBar.removeButton('home');
        toolBar.onResize();
    }
    showShareButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneShareButton());
            this.showAlert();
            return;
        }
        if (bookConfig.ShareButtonVisible || this.isHasButton('share', 'sharethis')) return;
        bookConfig.ShareButtonVisible = true;
        if (toolBar.btnShare) {
            toolBar.initShareButton();
        } else this.toolBarAddNewButton(new ShareButton());
        toolBar.sortXMLButton();
        initComponents();
        toolBar.onResize();
        global.sharePanel.onResize();
    }
    hideShareButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.ShareButtonVisible) return;
        bookConfig.ShareButtonVisible = false;

        if (global.sharePanel) global.sharePanel.hide();
        var share = toolBar.getButton("ShareButton", 'sharethis');
        if (toolBar.btnShare) {
            share = toolBar.btnShare;
            if (toolBar.shareBevel) toolBar.shareBevel.$body.remove();
        }
        toolBar.removeButton(share);
        toolBar.onResize();
    }

    setShareButtonParams(params) { // addCurrentPage
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        this.setBookConfig(params);
        if (global.sharePanel && global.sharePanel.elements) {
            global.sharePanel.elements.showOrHideCheck();
        }
    }

    showEmailButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneEmailButton());
            this.showAlert();
            return;
        }
        if (bookConfig.EmailButtonVisible || this.isHasButton('email')) return;
        bookConfig.EmailButtonVisible = true;
        this.toolBarAddNewButton(new ShareEmailButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
    }

    hideEmailButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.EmailButtonVisible) return;
        bookConfig.EmailButtonVisible = false;

        toolBar.removeButton('email');
        toolBar.onResize();
    }

    setEmailShareParams(params) { // btnShareWithEmailSubject btnShareWithEmailBody
        this.setBookConfig(params);
    }

    showTelephoneNumberButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneNumberButton());
            this.showAlert();
            return;
        }
        if (!global.phoneNumber.length || this.isHasButton('phoneNumber')) return;
        bookConfig.PhoneButtonVisible = true;
        this.toolBarAddNewButton(new TelephoneNumberButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
    }

    hideTelephoneNumberButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!this.isHasButton('phoneNumber')) return;
        bookConfig.PhoneButtonVisible = false;

        toolBar.removeButton('phoneNumber');
        toolBar.onResize();
    }

    setTelephoneNumberParams(params) { // PhoneNumbers PhoneButtonIcon PhoneButtonVisible
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (params.PhoneNumbers != undefined) window.phoneNumber = params.PhoneNumbers;
        this.setBookConfig(params);

        if (window.phoneNumber && window.phoneNumber.length) {
            if (bookConfig.PhoneButtonVisible) this.showTelephoneNumberButton();
            if (global.PcTelephoneNumberFrame) global.PcTelephoneNumberFrame.addItem();
        } else {
            if (this.isHasButton('phoneNumber')) {
                toolBar.removeButton('phoneNumber');
                toolBar.onResize();
            }
        }

        if (params.PhoneButtonIcon != undefined) {
            var button = toolBar.getButton('phoneNumber');
            if (button) {
                button.setCustomIcon(bookConfig.PhoneButtonIcon);
                button.resetImg();
                button.changeCaptionColor();
                if (!bookConfig.PhoneButtonIcon) button.changeColor();
            }
        }

    }

    showMagnifierButton() {
        if (global.templeteName == 'brief' || bookConfig.MagnifierButtonVisible || this.isHasButton('MagnifierButton')) return;
        bookConfig.MagnifierButtonVisible = true;
        this.toolBarAddNewButton(new MagnifierButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
    }

    hideMagnifierButton() {
        if (global.templeteName == 'brief' || !bookConfig.MagnifierButtonVisible) return;
        global.canMagnifierZoom = false;
        if (BookInfo.getBook()) BookInfo.getBook().unMagnifierZoom();
        bookConfig.MagnifierButtonVisible = false;

        toolBar.removeButton('MagnifierButton');
        toolBar.onResize();
    }

    showWeChatShareButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneWeChatShareButton());
            this.showAlert();
            return;
        }
        if (bookConfig.WeChatShareButtonVisible || this.isHasButton('wechat')) return;
        bookConfig.WeChatShareButtonVisible = true;

        this.toolBarAddNewButton(new WeChatShareButton());

        toolBar.sortXMLButton();
        toolBar.onResize();
    }

    hideWeChatShareButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.WeChatShareButtonVisible) return;
        bookConfig.WeChatShareButtonVisible = false;

        if (global.WeChatShareImg) global.WeChatShareImg.destroy();
        toolBar.removeButton('wechat');
        toolBar.onResize();
    }

    setWeChatShareParams(params) { // WeChatShareButtonIcon
        this.setBookConfig(params);
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        var button = toolBar.getButton('wechat');
        if (button) {
            button.setCustomIcon(bookConfig.WeChatShareButtonIcon);
            button.resetImg();
            button.changeCaptionColor();
            if (!bookConfig.WeChatShareButtonIcon) {
                button.changeColor();
            }
        }
    }

    showSoundButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneBackgroundSoundButton());
            this.showAlert();
            return;
        }
        if ((!bookConfig.FlipSound && !bookConfig.BackgroundSoundURL) || this.isHasButton('sound')) return;
        bookConfig.BackgroundSoundButtonVisible = true;
        if (toolBar.btnSound) {
            toolBar.initSoundButton();
        } else {
            this.toolBarAddNewButton(new BackgroundSoundButton());
        }
        toolBar.sortXMLButton();
        if (bgSound) bgSound.play();
        toolBar.onResize();
        initComponents();
    }
    hideSoundButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!this.isHasButton('sound')) return;
        bookConfig.BackgroundSoundButtonVisible = false;

        if (bgSound) bgSound.pause();

        var btnSound = toolBar.getButton('sound');
        if (toolBar.btnSound) {
            btnSound = toolBar.btnSound;
            if (toolBar.soundBevel) toolBar.soundBevel.$body.remove();
        }
        toolBar.removeButton(btnSound);
        toolBar.onResize();
    }
    playFlipSound(params) { // FlipSound BackgroundSoundButtonVisible
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        this.setBookConfig(params);

        if (!bookConfig.FlipSound && !bookConfig.BackgroundSoundURL) {
            if (this.isHasButton('sound')) this.hideSoundButton();
        } else {
            if (bookConfig.BackgroundSoundButtonVisible) {
                this.showSoundButton();
            }
        }
    }
    setBackgroundSound(params) { // BackgroundSoundURL BackgroundSoundLoop BackgroundSoundButtonVisible
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        this.setBookConfig(params);
        initComponents();

        if (!bookConfig.FlipSound && !bookConfig.BackgroundSoundURL) {
            if (this.isHasButton('sound')) this.hideSoundButton();
        } else {
            if (bookConfig.BackgroundSoundButtonVisible) {
                this.showSoundButton();
            }
        }

        if (global.bgSound.resetResource) global.bgSound.resetResource();
    }
    showAutoFlipButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneAutoPlayButton());
            this.showAlert();
            return;
        }
        if (bookConfig.AutoPlayButtonVisible || this.isHasButton('autoplay')) return;
        bookConfig.AutoPlayButtonVisible = true;
        if (toolBar.btnAutoPlay) {
            toolBar.initAutoPlayButton();
        } else {
            this.toolBarAddNewButton(new AutoPlayButton());
        }
        if (bookConfig.autoPlayAutoStart) {
            StateSynchronous.instance().findButtons("AutoPlayButton", true).each(function (button) {
                button.setAsStop();
                button.executeCallback();
            });
        }
        toolBar.sortXMLButton();
        toolBar.onResize();
    }
    hideAutoFlipButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.AutoPlayButtonVisible) return;
        bookConfig.AutoPlayButtonVisible = false;

        var autoplay = toolBar.getButton('autoplay');
        if (toolBar.btnAutoPlay) {
            autoplay = toolBar.btnAutoPlay;
            if (toolBar.soundBevel) toolBar.soundBevel.$body.remove();
        }
        if (!bookConfig.autoPlayAutoStart) {
            StateSynchronous.instance().findButtons("AutoPlayButton", true).each(function (button) {
                button.setAsStart();
                button.executeCallback();
            });
        }
        toolBar.removeButton(autoplay);
        toolBar.onResize();
    }
    setAutoFlipParams(params) { // autoPlayAutoStart
        this.setBookConfig(params);
        if (bookConfig.autoPlayAutoStart && auto_player) global.auto_player.start();
        if (!bookConfig.autoPlayAutoStart && auto_player) global.auto_player.stop();
    }
    showThumbnailButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneThumbnailButton());
            this.showAlert();
            return;
        }
        if (bookConfig.ThumbnailsButtonVisible || this.isHasButton('thumbnail')) return;
        bookConfig.ThumbnailsButtonVisible = true;
        if (global.templeteName != "active") {
            if (toolBar.btnThumbnail) {
                toolBar.initThumbnailButton();
            } else {
                this.toolBarAddNewButton(new ThumbnailButton());
            }
        }

        toolBar.sortXMLButton();
        toolBar.onResize();
        initComponents();
        global.thumbnail.onResize();
        if (global.templeteName == "active") thumbnail.show();

        if (BookInfo.isDoublePage(BookInfo.getBookType())) {
            thumbnail.mergeAll();
        } else {
            thumbnail.fissionAll();
        }
    }
    hideThumbnailButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.ThumbnailsButtonVisible) return;
        bookConfig.ThumbnailsButtonVisible = false;

        if (global.thumbnail) global.thumbnail.hide();

        var btnThumbnail = toolBar.getButton('thumbnail');
        if (toolBar.btnThumbnail) {
            btnThumbnail = toolBar.btnThumbnail;
            if (toolBar.thumbBevel) toolBar.thumbBevel.$body.remove();
        }

        toolBar.removeButton(btnThumbnail);
        toolBar.onResize();
    }
    showPrintButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhonePrintButton());
            this.showAlert();
            return;
        }
        if (bookConfig.PrintButtonVisible || this.isHasButton('print')) return;
        bookConfig.PrintButtonVisible = true;
        this.toolBarAddNewButton(new PrintButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
        initComponents();
        global.printBody.onResize();
    }
    hidePrintButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.PrintButtonVisible) return;
        bookConfig.PrintButtonVisible = false;

        if (global.printBody) global.printBody.hide();
        toolBar.removeButton('print');
        toolBar.onResize();
    }
    setPrintWatermark(params) { // printWatermarkFile
        this.setBookConfig(params);
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
    }
    setZoomOperation(params) { // ZoomButtonVisible SupportOperatePageZoom ZoomToolbarVisible ZoomMapVisible
        if (global.templeteName == 'brief' || params.SupportOperatePageZoom != undefined) {
            // this.toolBarAddNewButton(new PhoneZoomButton());
            this.showAlert();
            return;
        }
        this.setBookConfig(params);

        if (params.ZoomMapVisible || params.ZoomToolbarVisible || params.SupportOperatePageZoom) {
            this.showAlert();
        }

        if (bookConfig.ZoomButtonVisible) {
            if (!this.isHasButton('zoom')) {
                this.toolBarAddNewButton(new ZoomButton());
                toolBar.sortXMLButton();
                toolBar.onResize();
            }
        } else {
            bookConfig.SupportOperatePageZoom = false;
            bookConfig.ZoomToolbarVisible = false;
            bookConfig.ZoomMapVisible = false;

            toolBar.removeButton('zoom');
            toolBar.onResize();
        }
    }

    showFullscreenButton() {
        if (global.templeteName == 'brief' || bookConfig.FullscreenButtonVisible || this.isHasButton('fullscreen')) return;
        bookConfig.FullscreenButtonVisible = true;
        this.toolBarAddNewButton(new FullscreenButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
    }
    hideFullscreenButton() {
        if (global.templeteName == 'brief' || !bookConfig.FullscreenButtonVisible) return;
        bookConfig.FullscreenButtonVisible = false;
        toolBar.removeButton('fullscreen');
        toolBar.onResize();
    }
    showTableOfContentsButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneTableOfContentButton());
            this.showAlert();
            return;
        }
        if (bookConfig.TableOfContentButtonVisible || this.isHasButton('tableofcontent')) return;
        bookConfig.TableOfContentButtonVisible = true;
        this.toolBarAddNewButton(new TableOfContentButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
        initComponents();
        global.frmTableOfContent.onResize();
    }
    hideTableOfContentsButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.TableOfContentButtonVisible) return;
        bookConfig.TableOfContentButtonVisible = false;

        if (global.frmTableOfContent && global.frmTableOfContent.visible) global.frmTableOfContent.hide();
        toolBar.removeButton('tableofcontent');
        toolBar.onResize();
    }
    setShrinkRootNode(params) { // isHideTabelOfContentNodes
        this.setBookConfig(params);
        if (!global.frmTableOfContent) return;
        if (params && params.isHideTabelOfContentNodes != undefined) {
            if (!bookConfig.isHideTabelOfContentNodes) global.frmTableOfContent.elements.expandItems();
            else global.frmTableOfContent.elements.collapseItems();
        }
    }
    showBookmarkButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneBookmarkButton());
            this.showAlert();
            return;
        }
        if (bookConfig.BookMarkButtonVisible || this.isHasButton('bookmark')) return;
        bookConfig.BookMarkButtonVisible = true;
        this.toolBarAddNewButton(new BookmarkButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
        initComponents();
        global.bookmark.onResize();
    }
    hideBookmarkButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.BookMarkButtonVisible) return;
        bookConfig.BookMarkButtonVisible = false;
        if (global.bookmark && global.bookmark.visible) global.bookmark.hide();
        toolBar.removeButton('bookmark');
        toolBar.onResize();
    }
    showAnnotationButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneAnnotationButton());
            this.showAlert();
            return;
        }
        if (bookConfig.AnnotationButtonVisible || this.isHasButton('annotation')) return;
        bookConfig.AnnotationButtonVisible = true;
        this.toolBarAddNewButton(new AnnotationButton());

        if (!global.annotationPannel) {
            global.annotationPannel = new AnnotationPannel(tmpContainer);
            var pageArray = BookInfo.getBook().pageArray;
            for (var i = 0; i < pageArray.length; i++) {
                if (!pageArray[i]) continue;
                this.getPage().pageAttachments.createAnnotation();
            }
        }
        // global.annotationPannel.show();

        toolBar.sortXMLButton();
        toolBar.onResize();
    }
    getPage() {
        var index = BookInfo.getBook().currentPageIndex;
        var page = '';
        if (bookConfig.FlipStyle.toLocaleLowerCase() == 'slide' && BookInfo.isDoublePage(BookInfo.getBookType())) {
            if (BookInfo.getBook().pageArray[index].leftPage) page = BookInfo.getBook().pageArray[index].leftPage;
            else if (BookInfo.getBook().pageArray[index].rightPage) page = BookInfo.getBook().pageArray[index].rightPage;

            if (rightToLeft && BookInfo.getBook().pageArray[index].rightPage) page = BookInfo.getBook().pageArray[index].rightPage;
        } else {
            page = BookInfo.getBook().pageArray[index].page;
        }
        return page;
    }
    hideAnnotationButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.AnnotationButtonVisible) return;
        bookConfig.AnnotationButtonVisible = false;

        if (global.annotationPannel && global.annotationPannel.visible) global.annotationPannel.hide();
        toolBar.removeButton('annotation');
        toolBar.onResize();
    }
    showSearchButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneSearchButton());
            this.showAlert();
            return;
        }
        if (bookConfig.SearchButtonVisible || this.isHasButton('search')) return;
        bookConfig.SearchButtonVisible = true;

        if (toolBar.showOrHideSearchBar) {
            toolBar.showOrHideSearchBar();
        } else {
            this.toolBarAddNewButton(new SearchButton());
            toolBar.sortXMLButton();
        }

        toolBar.onResize();
        initComponents();
        global.frmSearch.onResize();
    }
    hideSearchButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.SearchButtonVisible) return;
        bookConfig.SearchButtonVisible = false;

        if (toolBar.showOrHideSearchBar) {
            toolBar.showOrHideSearchBar();
        } else {
            toolBar.removeButton('search');
        }

        if (global.frmSearch && global.frmSearch.visible) global.frmSearch.hide();
        toolBar.onResize();
    }
    setSearchParams(params) { // leastSearchChar searchKeywordFontColor searchHightlightColor
        this.setBookConfig(params);
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!global.frmSearch) return;
        if (frmSearch.visible && frmSearch.input.val()) {
            bookConfig.searchKeywordFontColor = Color(bookConfig.searchKeywordFontColor).toString();
            bookConfig.searchHightlightColor = Color(bookConfig.searchHightlightColor).toString();
            frmSearch.elements.searchText = '';
            frmSearch.elements.searchStart();
        }
    }
    showSelectTextButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneSelectTextButton());
            this.showAlert();
            return;
        }
        if (bookConfig.SelectTextButtonVisible || this.isHasButton('select')) return;
        bookConfig.SelectTextButtonVisible = true;
        this.toolBarAddNewButton(new SelectTextButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
    }
    hideSelectTextButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.SelectTextButtonVisible) return;
        bookConfig.SelectTextButtonVisible = false;

        if (BookInfo.getBook().unSelect) BookInfo.getBook().unSelect();
        toolBar.removeButton('select');
        toolBar.onResize();
    }
    showHelpButton() {
        if (global.templeteName == 'brief' || bookConfig.HelpButtonVisible || this.isHasButton('help')) return;
        bookConfig.HelpButtonVisible = true;
        this.toolBarAddNewButton(new HelpButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
        initComponents();
        global.helpBody.onResize();
    }
    hideHelpButton() {
        if (global.templeteName == 'brief' || !bookConfig.HelpButtonVisible) return;
        bookConfig.HelpButtonVisible = false;
        toolBar.removeButton('help');
        toolBar.onResize();
    }
    showAboutButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneAboutButton());
            this.showAlert();
            return;
        }
        if (bookConfig.aboutButtonVisible || this.isHasButton('about')) return;
        bookConfig.aboutButtonVisible = true;
        this.toolBarAddNewButton(new AboutButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
        initComponents();
        global.aboutBody.onResize();
    }
    hideAboutButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.aboutButtonVisible) return;
        bookConfig.aboutButtonVisible = false;

        toolBar.removeButton('about');
        toolBar.onResize();
    }
    setBookAboutInfo(params) { // CompanyLogoFile AboutAuthor AboutEmail AboutWebsite AboutMobile AboutAddress AboutDescription
        this.setBookConfig(params);
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!global.aboutBody) return;
        if (global.aboutBody.elements) global.aboutBody.elements.resetAboutHtml();
        if (global.aboutBody.initLogo) global.aboutBody.initLogo();
        if (global.aboutBody.aboutSwiper) global.aboutBody.aboutSwiper.refreshData();
    }
    showDownloadButton() {
        if (global.templeteName == 'brief') {
            // this.toolBarAddNewButton(new PhoneDownloadButton());
            this.showAlert();
            return;
        }
        if (bookConfig.DownloadButtonVisible || this.isHasButton('download')) return;
        bookConfig.DownloadButtonVisible = true;
        this.toolBarAddNewButton(new DownloadButton());
        toolBar.sortXMLButton();
        toolBar.onResize();
    }
    hideDownloadButton() {
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        if (!bookConfig.DownloadButtonVisible) return;
        bookConfig.DownloadButtonVisible = false;

        toolBar.removeButton('download');
        toolBar.onResize();
    }
    setDownloadURL(params) { // DownloadURL
        this.setBookConfig(params);
    }

    setPageCaption(params) { // totalPagesCaption pageNumberCaption
        if (global.templeteName == 'brief') {
            this.showAlert();
            return;
        }
        this.setBookConfig(params);
        setCurrentIndexTextField();
    }

    //xiayuting
    resetBookConfig(params) {
        // retainBookCenter isTheBookOpen
        // isHardCover hardCoverBorderWidth cornerRound borderColor outerCoverBorder coverTexture isHardPage
        // pageBackgroundColor
        // thicknessWidthType thicknessColor
        // leftMargin topMargin rightMargin bottomMargin
        // bleedAreaLeft bleedAreaTop bleedAreaRight bleedAreaBottom
        // BindingType
        // ShowTopLeftShadow LeftShadowWidth LeftShadowAlpha RightShadowWidth RightShadowAlpha
        this.setBookConfig(params);
        this.resetBook();
    }
    showAsSinglePage(params) { // showMirrorSide SingleModeBanFlipToLastPage
        if (bookConfig.autoDoublePage) {
            this.showAlert();
            return;
        } else {
            this.setBookConfig(params);
            this.resetBook();
        }
    }

    mouseWheelFlip(params) { // mouseWheelFlip
        this.setBookConfig(params);
    }
    curlingPageCorner(params) { // CurlingPageCorner
        this.setBookConfig(params);
    }
    resetBook() {
        bookConfig.OriginPageIndex = BookInfo.getCurrentPageIndex();

        if (window.flipBook) {
            flipBook.flipBook.remove();
            flipBook.destroy();
            flipBook = null;
        }
        if (window.singlePageBook) {
            singlePageBook.flipBook.remove();
            singlePageBook.destroy();
            singlePageBook = null;
        }
        if (window.slideBook) {
            slideBook.flipBook.remove();
            slideBook.destroy();
            slideBook = null;
        }
        if (window.singleSlideBook) {
            singleSlideBook.flipBook.remove();
            singleSlideBook.destroy();
            singleSlideBook = null;
        }
        if (window.catalogBook) {
            catalogBook.flipBook.remove();
            catalogBook.destroy();
            catalogBook = null;
        }
        if (window.singleCatalogBook) {
            singleCatalogBook.flipBook.remove();
            singleCatalogBook.destroy();
            singleCatalogBook = null;
        }

        global.bookType = (bookConfig.showDoublePage != "single") ? 0 : 1;
        global.rightToLeft = parseBool(bookConfig.RightToLeft, false);
        global.originTotalPageCount = parseInt(bookConfig.totalPageCount);
        global.totalPageCount = originTotalPageCount +
            (((originTotalPageCount % 2 == 1 && !bookConfig.isTheBookOpen) ||
                (originTotalPageCount % 2 == 0 && bookConfig.isTheBookOpen)) ? 1 : 0);
        initBook();
        changeShowBook(bookType);
        changeShowBookByWindow();
    }
}

var BookPreview = new BookPreviewInterface();

class KeyBridge {

    constructor(params) {
        this.params = params;
        var functionName = this.getFunctionName(this.params);
        if (functionName && BookPreview[functionName])
            BookPreview[functionName](this.params);
            
        return {
            'functionName' : functionName
        }
    }

    getFunctionName(params) {
        var prop = Object.keys(params)[0];
        switch (prop) {
            case "bgBeginColor":
            case "bgEndColor":
            case "bgMRotation":
            case "backgroundOpacity": {
                return "setBackgroundColor";
            }
            case "backGroundImgURL":
            case "backgroundPosition": {
                return "setBackgroundImage";
            }
            case "toolbarColor":
            case "ToolBarAlpha": {
                return "setToolbarColor";
            }
            case "iconColor":
            case "iconFontColor": {
                return "setToolbarButtonColor";
            }
            case "formBackgroundColor":
            case "formFontColor": {
                return "setFormColor";
            }
            case "appLogoIcon":
            case "appLogoLinkURL":
            case "appLogoOpenWindow":
            case "logoPadding":
            case "logoTop":
            case "logoHeight": {
                return "setBookLogo";
            }
            case "appLargeLogoIcon":
            case "isFixLogoSize":
            case "appLargeLogoURL":
            case "LargeLogoTarget":
            case "logoFixWidth":
            case "logoFixHeight": {
                return "setBookLargeLogo";
            }
            case "flippingTime": {
                return "setFlippingTime";
            }
            case "isStopMouseMenu": {
                return "preventPopupTheWebMenu";
            }
            case "flipshortcutbutton": {
                if (parseBool(this.params["flipshortcutbutton"], false)) {
                    return "showFlipShortcutButton";
                } else {
                    return "hideFlipShortcutButton";
                }
            }
            case "QRCode": {
                if (parseBool(this.params["QRCode"], false)) {
                    return "showQRCode";
                } else {
                    return "hideQRCode";
                }
            }
            case "enablePageBack": {
                if (parseBool(this.params["enablePageBack"], false)) {
                    return "showBackwardForwardButtons";
                } else {
                    return "hideBackwardForwardButtons";
                }
            }
            case "HomeURL": {
                return "setHomeButtonURL";
            }
            case "HomeButtonVisible": {
                if (parseBool(this.params["HomeButtonVisible"], false)) {
                    return "showHomeButton";
                } else {
                    return "hideHomeButton";
                }
            }
            case "ShareButtonVisible": {
                if (parseBool(this.params["ShareButtonVisible"], false)) {
                    return "showShareButton";
                } else {
                    return "hideShareButton";
                }
            }
            case "addCurrentPage": {
                return "setShareButtonParams";
            }
            case "EmailButtonVisible": {
                if (parseBool(this.params["EmailButtonVisible"], false)) {
                    return "showEmailButton";
                } else {
                    return "hideEmailButton";
                }
            }
            case "btnShareWithEmailSubject":
            case "btnShareWithEmailBody": {
                return "setEmailShareParams";
            }
            case "PhoneButtonVisible": {
                if (parseBool(this.params["PhoneButtonVisible"], false)) {
                    return "showTelephoneNumberButton";
                } else {
                    return "hideTelephoneNumberButton";
                }
            }
            case "PhoneNumbers":
            case "PhoneButtonIcon": {
                return "setTelephoneNumberParams";
            }
            case "MagnifierButtonVisible": {
                if (parseBool(this.params["MagnifierButtonVisible"], false)) {
                    return "showMagnifierButton";
                } else {
                    return "hideMagnifierButton";
                }
            }
            case "WeChatShareButtonVisible": {
                if (parseBool(this.params["WeChatShareButtonVisible"], false)) {
                    return "showWeChatShareButton";
                } else {
                    return "hideWeChatShareButton";
                }
            }
            case "WeChatShareButtonIcon": {
                return "setWeChatShareParams";
            }
            case "BackgroundSoundButtonVisible": {
                if (parseBool(this.params["BackgroundSoundButtonVisible"], false)) {
                    return "showSoundButton";
                } else {
                    return "hideSoundButton";
                }
            }
            case "FlipSound":
            case "BackgroundSoundButtonVisible": {
                return "playFlipSound";
            }
            case "BackgroundSoundURL":
            case "BackgroundSoundLoop":
            case "BackgroundSoundButtonVisible": {
                return "setBackgroundSound";
            }
            case "AutoPlayButtonVisible": {
                if (parseBool(this.params["AutoPlayButtonVisible"], false)) {
                    return "showAutoFlipButton";
                } else {
                    return "hideAutoFlipButton";
                }
            }
            case "autoPlayAutoStart": {
                return "setAutoFlipParams";
            }
            case "ThumbnailsButtonVisible": {
                if (parseBool(this.params["ThumbnailsButtonVisible"], false)) {
                    return "showThumbnailButton";
                } else {
                    return "hideThumbnailButton";
                }
            }
            case "PrintButtonVisible": {
                if (parseBool(this.params["PrintButtonVisible"], false)) {
                    return "showPrintButton";
                } else {
                    return "hidePrintButton";
                }
            }
            case "printWatermarkFile": {
                return "setPrintWatermark";
            }
            case "ZoomButtonVisible":
            case "SupportOperatePageZoom":
            case "ZoomToolbarVisible":
            case "ZoomMapVisible": {
                return "setZoomOperation";
            }
            case "FullscreenButtonVisible": {
                if (parseBool(this.params["FullscreenButtonVisible"], false)) {
                    return "showFullscreenButton";
                } else {
                    return "hideFullscreenButton";
                }
            }
            case "TableOfContentButtonVisible": {
                if (parseBool(this.params["TableOfContentButtonVisible"], false)) {
                    return "showTableOfContentsButton";
                } else {
                    return "hideTableOfContentsButton";
                }
            }
            case "BookMarkButtonVisible": {
                if (parseBool(this.params["BookMarkButtonVisible"], false)) {
                    return "showBookmarkButton";
                } else {
                    return "hideBookmarkButton";
                }
            }
            case "isHideTabelOfContentNodes": {
                return "setShrinkRootNode";
            }
            case "AnnotationButtonVisible": {
                if (parseBool(this.params["AnnotationButtonVisible"], false)) {
                    return "showAnnotationButton";
                } else {
                    return "hideAnnotationButton";
                }
            }
            case "SearchButtonVisible": {
                if (parseBool(this.params["SearchButtonVisible"], false)) {
                    return "showSearchButton";
                } else {
                    return "hideSearchButton";
                }
            }
            case "leastSearchChar":
            case "searchKeywordFontColor":
            case "searchHightlightColor": {
                return "setSearchParams";
            }
            case "SelectTextButtonVisible": {
                if (parseBool(this.params["SelectTextButtonVisible"], false)) {
                    return "showSelectTextButton";
                } else {
                    return "hideSelectTextButton";
                }
            }
            case "HelpButtonVisible": {
                if (parseBool(this.params["HelpButtonVisible"], false)) {
                    return "showHelpButton";
                } else {
                    return "hideHelpButton";
                }
            }
            case "aboutButtonVisible": {
                if (parseBool(this.params["aboutButtonVisible"], false)) {
                    return "showAboutButton";
                } else {
                    return "hideAboutButton";
                }
            }
            case "DownloadButtonVisible": {
                if (parseBool(this.params["DownloadButtonVisible"], false)) {
                    return "showDownloadButton";
                } else {
                    return "hideDownloadButton";
                }
            }
            case "CompanyLogoFile":
            case "AboutAuthor":
            case "AboutEmail":
            case "AboutWebsite":
            case "AboutMobile":
            case "AboutAddress":
            case "AboutDescription": {
                return "setBookAboutInfo";
            }
            case "DownloadURL": {
                return "setDownloadURL";
            }
            case "totalPagesCaption":
            case "pageNumberCaption": {
                return "setPageCaption";
            }
            case "mouseWheelFlip": {
                return "mouseWheelFlip";
            }
            case "CurlingPageCorner": {
                return "curlingPageCorner";
            }
            case "retainBookCenter":
            case "isTheBookOpen":
            case "HardPageEnable":
            case "hardCoverBorderWidth":
            case "cornerRound":
            case "borderColor":
            case "outerCoverBorder":
            case "coverTexture":
            case "HardInnerPageEnable":
            case "pageBackgroundColor":
            case "thicknessWidthType":
            case "thicknessColor":
            case "leftMargin":
            case "topMargin":
            case "rightMargin":
            case "bottomMargin":
            case "bleedAreaLeft":
            case "bleedAreaTop":
            case "bleedAreaRight":
            case "bleedAreaBottom":
            case "BindingType":
            case "ShowTopLeftShadow":
            case "LeftShadowWidth":
            case "LeftShadowAlpha":
            case "RightShadowWidth":
            case "RightShadowAlpha": {
                return "resetBookConfig";
            }
            case "showMirrorSide":
            case "SingleModeBanFlipToLastPage": {
                return "showAsSinglePage";
            }
            default: {
                return "showAlert";
            }
        }
    }

}

//Custom settings
// new KeyBridge({bgBeginColor:"#ffffff"});
//还原的时候不弹出提示
//BookPreview.isShowAlert = false;