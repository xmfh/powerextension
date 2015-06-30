

$(function () {	
	function trimDomain(domain) {
		var terms = domain.split('://'),
			term = terms.length > 1 ? terms[1] : terms[0];

		return term.split('/')[0];


	}

	function getProduction(val) {
		var ps = val.split(' '),
			p = ps[0];

		switch (p) {
			case 'SmartGov':
				return 'g';
			case 'BizIdea':
				return 'b';
			case 'SmartSchool':
				return 's';
			case 'SiteFactory':
				return 'f';
			case '医院网站管理系统':
				return 'h';
		}
	}

	function combinParams(params) {

		return '\"' + params.join('\" \"') + '\"';
	}

	if ($('#formcontent').find('strong').first().text() === '解除系统加密审批表') {
		var version = $('[name="{control_14}"]').val().substr(1),
			production = getProduction($('[name="{control_13}"]').val()),
			sn = $('[name="{control_12}"]').val(),
			domain = $('[name="{control_11}"]').val(),
			$container = $('[name="{control_10}"]');
		$container.attr('readonly', false).attr('disabled', false);
		domain = trimDomain(domain);

		$container.val($container.val() + 'd:\\toolkit\\crack ' + combinParams([version, production, domain, sn]));
	}



});