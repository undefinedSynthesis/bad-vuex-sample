<?php

$date = '2021-10-12 23:09:45';
var_dump(isValidDateTime($date));

/**
 * 日付時刻が正しいかチェックする.
 *
 * @param string $datetime 日付と時刻の文字列（yyyy/mm/dd hh:mm:ss || yyyy/mm/dd hh:mm)
 *
 * @return bool 一致していればtrue, いなければfalse
 */
function isValidDateTime(string $datetime): bool
{
    $parts = explode(' ', $datetime);

    if (count($parts) !== 2) {
        return false;
    }

    // 日付チェック
    $date_part = explode('-', $parts[0]);

    if (!checkdate((int) $date_part[1], (int) $date_part[2], (int) $date_part[0])) {
        return false;
    }

    // 時刻チェック
    $time = $parts[1];
    $counts = count(explode(':', $time));
    if ($counts === 3) {
        $matched_24_hour = preg_match('/^(0[0-9]{1}|1[0-9]{1}|2[0-3]{1}):(0[1-9]{1}|[0-5]{1}[1-9]{1}):(0[1-9]{1}|[0-5]{1}[1-9]{1})$/', $time) != false;
        $matched_12_hour = preg_match('/^(0[0-9]{1}|1[0-2]{1}):(0[1-9]{1}|[0-5]{1}[1-9]{1}):(0[1-9]{1}|[0-5]{1}[1-9]{1})$/', $time) != false;

        return $matched_24_hour || $matched_12_hour;
    } elseif ($counts === 2) {
        $matched_24_hour = preg_match('/^(0[0-9]{1}|1[0-9]{1}|2[0-3]{1}):(0[1-9]{1}|[0-5]{1}[1-9]{1})$/', $time) != false;
        $matched_12_hour = preg_match('/^(0[0-9]{1}|1[0-2]{1}):(0[1-9]{1}|[0-5]{1}[1-9]{1})$/', $time) != false;

        return $matched_24_hour || $matched_12_hour;
    }

    return false;
}
